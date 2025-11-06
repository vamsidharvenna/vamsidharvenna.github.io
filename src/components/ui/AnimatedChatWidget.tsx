
import React, { useEffect, useRef, useState } from "react";
import "./AnimatedChatWidget.css";

interface AnimatedChatWidgetProps {
  className?: string;
}

type LivechatPayload = {
  token: string;
  conversationSid: string;
};

declare global {
  interface WindowEventMap {
    dfMessengerCustomPayload: CustomEvent<{ payload?: { livechat?: LivechatPayload } }>;
    "df-payload-response": CustomEvent<{ payload?: { livechat?: LivechatPayload } }>;
  }
  interface Window {
    Twilio?: any;
  }
}

const AnimatedChatWidget: React.FC<AnimatedChatWidgetProps> = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ author: string; body: string }>>([]);
  const [currentIdentity, setCurrentIdentity] = useState<string | null>(null);
  const [typingFrom, setTypingFrom] = useState<string | null>(null);
  const suggestions = ["Talk to a human", "Order status", "Pricing", "Technical support"];

  const convoRef = useRef<any>(null);
  const clientRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const mountedRef = useRef(false);

  // Load Dialogflow + Twilio scripts once
  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;

    // DF Messenger
    const dfScript = document.createElement("script");
    dfScript.src = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
    dfScript.async = true;
    document.head.appendChild(dfScript);

    // Twilio Conversations SDK
    const twScript = document.createElement("script");
    twScript.src = "https://media.twiliocdn.com/sdk/js/conversations/v2.4/twilio-conversations.min.js";
    twScript.async = true;
    document.head.appendChild(twScript);

    return () => {
      dfScript.parentNode?.removeChild(dfScript);
      twScript.parentNode?.removeChild(twScript);
    };
  }, []);

  // Listen for DF payload that contains livechat token + conversationSid
  useEffect(() => {
    const handler = async (payload?: LivechatPayload) => {
      if (!payload?.token || !payload?.conversationSid) return;

      // Ensure Twilio SDK is ready
      const waitForTwilio = () =>
        new Promise<void>((resolve) => {
          const check = () => (window.Twilio?.Conversations?.Client ? resolve() : setTimeout(check, 100));
          check();
        });
      await waitForTwilio();

      // Create client and connect to conversation
      if (!clientRef.current) {
        clientRef.current = await window.Twilio.Conversations.Client.create(payload.token);
        try {
          const ident = clientRef.current?.user?.identity ?? null;
          setCurrentIdentity(ident);
        } catch {}
      }

      const conversation = await clientRef.current.getConversationBySid(payload.conversationSid);
      convoRef.current = conversation;

      // Initialize messages
      try {
        const paginator = await conversation.getMessages();
        const seed = paginator.items.map((m: any) => ({ author: m.author, body: m.body }));
        setMessages(seed);
      } catch {}

      // Subscribe to events
      conversation.removeAllListeners("messageAdded");
      conversation.on("messageAdded", (m: any) => {
        setMessages((prev) => [...prev, { author: m.author, body: m.body }]);
      });
      conversation.on("typingStarted", (p: any) => {
        setTypingFrom(p?.identity ?? "Agent");
      });
      conversation.on("typingEnded", () => setTypingFrom(null));

      setOpen(true);
      setMessages((prev) => [...prev, { author: "System", body: "Connected. A human will join shortly." }]);
    };

    // Support both event names
    const onCustom = (e: Event) => {
      const ce = e as CustomEvent<{ payload?: { livechat?: LivechatPayload } }>;
      void handler(ce.detail?.payload?.livechat);
    };
    const onAlt = (e: Event) => {
      const ce = e as CustomEvent<{ payload?: { livechat?: LivechatPayload } }>;
      void handler(ce.detail?.payload?.livechat);
    };

    window.addEventListener("dfMessengerCustomPayload", onCustom);
    window.addEventListener("df-payload-response", onAlt);
    return () => {
      window.removeEventListener("dfMessengerCustomPayload", onCustom);
      window.removeEventListener("df-payload-response", onAlt);
    };
  }, []);

  const sendMessage = async () => {
    const text = inputRef.current?.value?.trim();
    if (!text || !convoRef.current) return;
    await convoRef.current.sendMessage(text);
    inputRef.current!.value = "";
  };

  return (
    <div className={`animated-chat-widget-container ${className}`}>
      {/* Dialogflow Messenger (embedded) */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <df-messenger
              location="us"
              project-id="vamsidharvennabot"
              agent-id="3b7c3a47-2227-4ae0-8977-480faefb189e"
              language-code="en"
              chat-title="Chat with Vamsidhar"
              placeholder-text="Type your message..."
              bot-writing-text="Vamsidhar is typing..."
              expand="false">
            </df-messenger>
          `,
        }}
      />

      {/* Verizon‑style panel */}
      {open && (
        <div className="vz-chat-panel vz-dark" role="dialog" aria-label="Live chat panel">
          <div className="vz-chat-header">
            <div className="vz-brand">
              <span className="vz-brand-dot" aria-hidden="true"></span>
              <span className="vz-brand-text">Vamsidhar Support</span>
            </div>
            <button className="vz-close" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </div>
          <div className="vz-chat-body" id="lc-body">
            {messages.map((m, i) => {
              const mine = currentIdentity && m.author === currentIdentity;
              return (
                <div className={`vz-msg ${mine ? "vz-msg--mine" : "vz-msg--agent"}`} key={`${i}-${m.body}`}>
                  <div className={`vz-bubble ${mine ? "vz-bubble--mine" : ""}`}>
                    <div className="vz-meta">{mine ? "You" : m.author}</div>
                    <div className="vz-text">{m.body}</div>
                  </div>
                </div>
              );
            })}
            {typingFrom && (
              <div className="vz-typing" aria-live="polite">
                <span className="vz-typing-dot"></span>
                <span className="vz-typing-dot"></span>
                <span className="vz-typing-dot"></span>
              </div>
            )}
          </div>
          <div className="vz-suggestions">
            {suggestions.map((s) => (
              <button
                key={s}
                className="vz-chip"
                onClick={() => {
                  if (inputRef.current) inputRef.current.value = s;
                  void sendMessage();
                }}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="vz-chat-input">
            <input
              ref={inputRef}
              placeholder="Message…"
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <button className="vz-send" onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}

      {!open && (
        <button
          className="vz-launcher vz-dark"
          aria-label="Open live chat"
          onClick={() => setOpen(true)}
        >
          ?
        </button>
      )}
    </div>
  );
};

export default AnimatedChatWidget;

import React, { useEffect, useRef, useState } from "react";
import "./CustomChatWidget.css";

declare global {
  interface Window {
    Tawk_API?: {
      maximize?: () => void;
      minimize?: () => void;
      toggle?: () => void;
    };
  }
}

type ChatMessage = {
  id: string;
  author: "user" | "bot" | "system";
  text?: string;
  chips?: string[];
};

interface CustomChatWidgetProps {
  backendUrl?: string;
}

const getDefaultBackendUrl = (): string => {
  const envUrl = import.meta.env.VITE_DFCX_BACKEND_URL as string | undefined;

  return (
    envUrl ||
    "https://dfcx-backend-787783466617.us-central1.run.app/api/dfcx/detect-intent"
  );
};

const CustomChatWidget: React.FC<CustomChatWidgetProps> = ({
  backendUrl,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [liveChatActive, setLiveChatActive] = useState(false);

  const sessionIdRef = useRef<string>("");

  const addMessage = (
    author: ChatMessage["author"],
    text?: string,
    chips?: string[],
  ) => {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}_${Math.random()}`, author, text, chips },
    ]);
  };

  const openLiveChat = () => {
    setLiveChatActive(true);
    addMessage(
      "system",
      "You’re now connected to a human agent in live chat.",
    );
  };

  const processBackendResponse = (data: any) => {
    // Preferred: ordered items from backend
    if (Array.isArray(data.items)) {
      data.items.forEach((item: any) => {
        const text =
          typeof item.text === "string" && item.text.trim().length > 0
            ? item.text
            : undefined;
        const chips = Array.isArray(item.chips)
          ? (item.chips as unknown[]).filter(
              (label) => typeof label === "string" && label.trim().length > 0,
            )
          : undefined;

        if (text || (chips && chips.length)) {
          addMessage("bot", text, chips as string[] | undefined);
        }
      });
    } else {
      // Backward-compatible: flat messages + chips
      if (Array.isArray(data.messages)) {
        data.messages.forEach((m: string) => {
          if (m && typeof m === "string") {
            addMessage("bot", m);
          }
        });
      }

      if (Array.isArray(data.chips) && data.chips.length > 0) {
        const labels = data.chips.filter(
          (label: unknown) =>
            typeof label === "string" && label.trim().length > 0,
        ) as string[];
        if (labels.length > 0) {
          addMessage("bot", undefined, labels);
        }
      }
    }

    if (data.liveAgentHandoff) {
      openLiveChat();
    }
  };

  const callBot = async (options: { text?: string; event?: string }) => {
    const text = options.text?.trim();
    const event = options.event;

    if (!text && !event) return;
    if (isSending) return;

    const isText = !!text;

    if (isText) {
      if (liveChatActive) {
        addMessage(
          "system",
          "You are currently connected to a live agent in the Tawk chat window. Please use that window to continue the conversation.",
        );
        return;
      }
      addMessage("user", text);
    }

    setIsSending(true);

    try {
      const url = backendUrl || getDefaultBackendUrl();

      const body: Record<string, unknown> = {
        sessionId: sessionIdRef.current,
        parameters: {},
      };

      if (text) body.text = text;
      if (event) body.event = event;

      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await resp.json();

      if (!resp.ok || data.error) {
        // eslint-disable-next-line no-console
        console.error("DFCX backend error:", data.error || resp.statusText);
        addMessage(
          "system",
          "Sorry, something went wrong talking to the assistant.",
        );
        return;
      }

      processBackendResponse(data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error sending message to DFCX backend:", err);
      addMessage(
        "system",
        "Network issue. Please try again in a few seconds.",
      );
    } finally {
      setIsSending(false);
    }
  };

  const sendTextToBot = async (text: string) => {
    await callBot({ text });
  };

  const sendWelcomeEvent = async () => {
    await callBot({ event: "WELCOME" });
  };

  useEffect(() => {
    let sid = window.localStorage.getItem("dfcxSessionId");
    if (!sid) {
      sid = "sess_" + Math.random().toString(36).slice(2);
      window.localStorage.setItem("dfcxSessionId", sid);
    }
    sessionIdRef.current = sid;

    const welcomeKey = `dfcxWelcomeSent_${sid}`;
    const alreadySent = window.sessionStorage.getItem(welcomeKey) === "1";
    if (!alreadySent) {
      window.sessionStorage.setItem(welcomeKey, "1");
      void sendWelcomeEvent();
    }
  }, []);

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    await sendTextToBot(text);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void handleSend();
    }
  };

  const handleChipClick = (label: string) => {
    void sendTextToBot(label);
  };

  return (
    <div className="cw-shell">
      <div className="cw-header">
        <div>
          <div className="cw-title">Vamsidhar’s Assistant</div>
          <div className="cw-subtitle">
            Portfolio guide • Dialogflow CX + Live Chat
          </div>
        </div>
        <button
          type="button"
          className="cw-live-btn"
          onClick={openLiveChat}
        >
          Live Agent
        </button>
      </div>

      {liveChatActive && (
        <div className="cw-banner" aria-live="polite">
          <span className="cw-banner-dot" />
          <span className="cw-banner-text">
            You&apos;re now connected to a human agent in live chat. Messages
            here are paused while the live chat is active.
          </span>
        </div>
      )}

      <div className="cw-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`cw-message cw-message--${msg.author}`}
          >
            {msg.text && <div className="cw-bubble">{msg.text}</div>}

            {msg.chips && msg.chips.length > 0 && (
              <div className="cw-chips">
                {msg.chips.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="cw-chip"
                    onClick={() => handleChipClick(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {liveChatActive && (
          <iframe
            title="Live chat"
            src="https://tawk.to/chat/691bb5a2905623195827c272/1jaa3r0h4"
            className="cw-live-frame"
            allow="microphone; camera; geolocation"
          />
        )}
      </div>

      <div
        className={`cw-input-row ${
          liveChatActive ? "cw-input-row--dimmed" : ""
        }`}
      >
        <input
          className="cw-input"
          placeholder={
            liveChatActive
              ? "Live agent connected • Use the Tawk chat window"
              : "Ask about projects, skills, resume..."
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={liveChatActive}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className="cw-send-btn"
          disabled={isSending || !input.trim() || liveChatActive}
          onClick={handleSend}
        >
          {isSending ? "…" : "Send"}
        </button>
      </div>
    </div>
  );
};

export default CustomChatWidget;

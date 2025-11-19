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

type Author = "user" | "bot" | "system";

type ChatMessage = {
  id: string;
  author: Author;
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
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const sessionIdRef = useRef<string>("");
  const initialSignatureRef = useRef<string | null>(null);
  const hasUserTurnRef = useRef(false);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const addMessage = (
    author: Author,
    text?: string,
    chips?: string[],
  ): void => {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}_${Math.random()}`, author, text, chips },
    ]);
  };

  const toggleWidget = (): void => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        setShowPrompt(false);
      }
      return next;
    });
  };

  const closeWidget = (): void => {
    setIsOpen(false);
  };

  const openLiveChat = (): void => {
    setIsOpen(true);
    setLiveChatActive(true);
  };

  const processBackendResponse = (data: any): void => {
    // Signature used to suppress duplicate initial welcome payloads.
    let signature = "";
    if (Array.isArray(data.items)) {
      signature = data.items
        .map((item: any) => {
          const text =
            typeof item.text === "string" && item.text.trim().length > 0
              ? item.text.trim()
              : "";
          const chipsValue = Array.isArray(item.chips)
            ? (item.chips as string[]).join("~")
            : "";
          return `${text}|${chipsValue}`;
        })
        .join("||");
    } else {
      const msgs = Array.isArray(data.messages)
        ? data.messages.join("~")
        : "";
      const chipsValue = Array.isArray(data.chips)
        ? data.chips.join("~")
        : "";
      signature = `${msgs}|${chipsValue}`;
    }

    if (!hasUserTurnRef.current) {
      if (initialSignatureRef.current === null) {
        initialSignatureRef.current = signature;
      } else if (initialSignatureRef.current === signature) {
        // Same welcome payload repeated before any user turn; ignore.
        return;
      }
    }

    if (Array.isArray(data.items)) {
      data.items.forEach((item: any) => {
        const text =
          typeof item.text === "string" && item.text.trim().length > 0
            ? item.text
            : undefined;
        const chips =
          Array.isArray(item.chips) && item.chips.length > 0
            ? (item.chips as unknown[])
                .filter(
                  (label) =>
                    typeof label === "string" &&
                    (label as string).trim().length > 0,
                )
                .map((label) => label as string)
            : undefined;

        if (text || (chips && chips.length > 0)) {
          addMessage("bot", text, chips);
        }
      });
    } else {
      if (Array.isArray(data.messages)) {
        data.messages.forEach((m: string) => {
          if (m && typeof m === "string") {
            addMessage("bot", m);
          }
        });
      }

      if (Array.isArray(data.chips) && data.chips.length > 0) {
        const labels = (data.chips as unknown[]).filter(
          (label) => typeof label === "string" && (label as string).trim(),
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

  const getChipIcon = (label: string): string | null => {
    const key = label.toLowerCase();
    if (key.includes("live chat")) return "⚡";
    if (key.includes("about")) return "📌";
    if (key.includes("projects")) return "📁";
    if (key.includes("skills")) return "🧠";
    if (key.includes("experience")) return "💼";
    if (key.includes("certifications")) return "🎓";
    if (key.includes("resume") && !key.includes("download")) return "📄";
    if (key.includes("contact")) return "📨";
    return null;
  };

  const renderTextWithLinks = (text: string): React.ReactNode => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const segments: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    // eslint-disable-next-line no-cond-assign
    while ((match = urlRegex.exec(text)) !== null) {
      const [url] = match;
      const start = match.index;

      const before = text.slice(lastIndex, start);
      if (before) {
        segments.push(before);
      }

      const isVerifyContext = /verify:\s*$/i.test(before);

      segments.push(
        <a
          key={`${url}-${start}`}
          href={url}
          target="_blank"
          rel="noreferrer"
          className={isVerifyContext ? "cw-link cw-link--badge" : "cw-link"}
        >
          {isVerifyContext ? "View certificate ↗" : url}
        </a>,
      );

      lastIndex = start + url.length;
    }

    if (lastIndex < text.length) {
      segments.push(text.slice(lastIndex));
    }

    return segments;
  };

  const callBot = async (options: {
    text?: string;
    event?: string;
  }): Promise<void> => {
    const trimmed = options.text?.trim();
    const event = options.event;

    if (!trimmed && !event) return;
    if (isSending) return;

    const isText = !!trimmed;

    if (isText) {
      if (liveChatActive) {
        addMessage(
          "system",
          "You are currently connected to a live agent in the Tawk chat window. Please use that window to continue the conversation.",
        );
        return;
      }
      addMessage("user", trimmed);
    }

    setIsSending(true);
    setIsBotTyping(true);

    try {
      const url = backendUrl || getDefaultBackendUrl();

      const body: Record<string, unknown> = {
        sessionId: sessionIdRef.current,
        parameters: {},
      };

      if (trimmed) body.text = trimmed;
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
      setIsBotTyping(false);
    }
  };

  const sendTextToBot = async (text: string): Promise<void> => {
    hasUserTurnRef.current = true;
    await callBot({ text });
  };

  const sendWelcomeEvent = async (): Promise<void> => {
    await callBot({ event: "WELCOME" });
  };

  useEffect(() => {
    let sid = window.localStorage.getItem("dfcxSessionId");
    if (!sid) {
      sid = "sess_" + Math.random().toString(36).slice(2);
      window.localStorage.setItem("dfcxSessionId", sid);
    }
    sessionIdRef.current = sid;

    void sendWelcomeEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When live chat is activated, automatically scroll the conversation
  // area so the embedded live-chat iframe is visible without manual scroll.
  useEffect(() => {
    if (liveChatActive && isOpen && messagesContainerRef.current) {
      const node = messagesContainerRef.current;
      node.scrollTo({
        top: node.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [liveChatActive, isOpen]);

  const handleSend = async (): Promise<void> => {
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

  const handleChipClick = (label: string): void => {
    void sendTextToBot(label);
  };

  const dismissPrompt = (): void => {
    setShowPrompt(false);
  };

  return (
    <>
      {showPrompt && !isOpen && (
        <div className="cw-prompt" aria-label="Assistant notification">
          <div className="cw-prompt-card">
            <p className="cw-prompt-text">
              Need assistance? I&apos;m
              <br />
              here to chat.
            </p>
            <button
              type="button"
              className="cw-prompt-close"
              aria-label="Dismiss assistant notification"
              onClick={dismissPrompt}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Avatar launcher bubble sits below the panel, toggles open/close */}
      <button
        type="button"
        className="cw-launcher"
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
        onClick={toggleWidget}
      />

      {isOpen && (
        <div className={`cw-shell ${liveChatActive ? "cw-shell--live" : ""}`}>
          <div className="cw-header">
            <div>
              <div className="cw-title">
                Vamsidhar&apos;s Assistant 🤖
              </div>
              <div className="cw-subtitle">
                Your Gen AI-Powered Portfolio Guide
              </div>
            </div>
            <button
              type="button"
              className="cw-header-close"
              aria-label="Close assistant"
              onClick={closeWidget}
            >
              ×
            </button>
            <button
              type="button"
              className="cw-live-btn"
              onClick={openLiveChat}
            >
              LIVE CHAT
            </button>
          </div>

          {liveChatActive && (
            <div className="cw-banner" aria-live="polite">
              <span className="cw-banner-dot" />
              <span className="cw-banner-text">
                You&apos;re now connected to Vamsidhar Venna in live chat.
                Messages here are paused while the live chat is active.
              </span>
              <button
                type="button"
                className="cw-banner-return"
                onClick={() => {
                  setLiveChatActive(false);
                  addMessage(
                    "system",
                    "Live chat ended. You can continue with Vamsidhar's Assistant here.",
                  );
                }}
              >
                ← Return to assistant
              </button>
            </div>
          )}

          <div className="cw-messages" ref={messagesContainerRef}>
            {messages.map((msg, index) => {
              const isWelcome =
                msg.author === "bot" && index === 0 && !!msg.text;
              const isLiveChatSystem =
                msg.author === "system" &&
                typeof msg.text === "string" &&
                msg.text
                  .toLowerCase()
                  .includes("connected to a human agent in live chat");

              if (isLiveChatSystem) {
                return null;
              }

              return (
                <div
                  key={msg.id}
                  className={`cw-message cw-message--${msg.author}`}
                >
                  {msg.text && (
                    <div
                      className={
                        isWelcome
                          ? "cw-bubble cw-bubble--welcome"
                          : "cw-bubble"
                      }
                    >
                      {renderTextWithLinks(msg.text)}
                    </div>
                  )}

                  {msg.chips && msg.chips.length > 0 && (() => {
                    const primaryLabels = ["share your details", "live chat"];
                    const primary: string[] = [];
                    const secondary: string[] = [];

                    msg.chips!.forEach((label) => {
                      const key = label.toLowerCase();
                      if (primaryLabels.some((p) => key.includes(p))) {
                        primary.push(label);
                      } else {
                        secondary.push(label);
                      }
                    });

                    const isOngoing = hasUserTurnRef.current;
                    const hasAnyChips =
                      primary.length > 0 || secondary.length > 0;

                    return (
                      <>
                        {isOngoing && hasAnyChips && (
                          <div className="cw-chips-label">Quick actions</div>
                        )}

                        {primary.length > 0 && (
                          <div
                            className={`cw-chips cw-chips--primary ${
                              isOngoing ? "cw-chips--compact" : ""
                            }`}
                          >
                            {primary.map((label, chipIndex) => {
                              const icon = getChipIcon(label);
                              return (
                                <button
                                  key={label}
                                  type="button"
                                  className={`cw-chip cw-chip--primary ${
                                    isOngoing ? "cw-chip--compact" : ""
                                  }`}
                                  style={{
                                    animationDelay: `${chipIndex * 40}ms`,
                                  }}
                                  onClick={() => handleChipClick(label)}
                                >
                                  {icon && (
                                    <span
                                      className="cw-chip-icon"
                                      aria-hidden="true"
                                    >
                                      {icon}
                                    </span>
                                  )}
                                  <span className="cw-chip-label">
                                    {label}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {secondary.length > 0 && (
                          <div
                            className={`cw-chips cw-chips--secondary ${
                              isOngoing ? "cw-chips--compact" : ""
                            }`}
                          >
                            {secondary.map((label, chipIndex) => {
                              const icon = getChipIcon(label);
                              return (
                                <button
                                  key={label}
                                  type="button"
                                  className={`cw-chip cw-chip--secondary ${
                                    isOngoing ? "cw-chip--compact" : ""
                                  }`}
                                  style={{
                                    animationDelay: `${chipIndex * 40}ms`,
                                  }}
                                  onClick={() => handleChipClick(label)}
                                >
                                  {icon && (
                                    <span
                                      className="cw-chip-icon"
                                      aria-hidden="true"
                                    >
                                      {icon}
                                    </span>
                                  )}
                                  <span className="cw-chip-label">
                                    {label}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              );
            })}

            {isBotTyping && (
              <div className="cw-typing" aria-label="Assistant is typing">
                <div className="cw-typing-dots">
                  <span className="cw-typing-dot" />
                  <span className="cw-typing-dot" />
                  <span className="cw-typing-dot" />
                </div>
              </div>
            )}

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
                  ? "Live agent connected - Use the Tawk chat window"
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
              {isSending ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomChatWidget;


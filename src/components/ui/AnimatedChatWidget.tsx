import React, { useEffect, useRef, useState } from "react";
import "./AnimatedChatWidget.css";

interface AnimatedChatWidgetProps {
  className?: string;
}

declare global {
  interface Window {
    dfMessengerLoaded?: boolean;
  }
  namespace JSX {
    interface IntrinsicElements {
      "df-messenger": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "project-id": string;
        "agent-id": string;
        location: string;
        "language-code": string;
        "chat-title": string;
        "chat-subtitle"?: string;
        "placeholder-text"?: string;
        "bot-writing-text"?: string;
        intent?: string;
      };
      "df-messenger-chat-bubble": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "chat-title"?: string;
      };
    }
  }
}

const DF_SCRIPT_SRC =
  "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";

type DFMessengerElement = HTMLElement & { shadowRoot?: ShadowRoot | null };

const ensureShadowStyle = (root: ShadowRoot, id: string, css: string) => {
  if (root.getElementById(id)) return false;
  const style = document.createElement("style");
  style.id = id;
  style.textContent = css;
  root.appendChild(style);
  return true;
};

const applySendButtonTheme = (host: DFMessengerElement | null) => {
  const shadowRoot = host?.shadowRoot;
  if (!shadowRoot) return;

  const chat = shadowRoot.querySelector("df-messenger-chat") as
    | DFMessengerElement
    | null;
  const chatShadow = chat?.shadowRoot;
  if (!chatShadow) return;

  ensureShadowStyle(
    chatShadow,
    "df-whatsapp-send-button",
    `
      .send-icon-button-wrapper {
        width: auto !important;
        height: auto !important;
        margin-left: 8px !important;
      }

      #send-icon-button {
        background: linear-gradient(135deg, #ff3b30, #c30000) !important;
        border-radius: 20px !important;
        width: 118px !important;
        height: 46px !important;
        display: inline-flex !important;
        align-items: center;
        justify-content: center;
        padding: 0 !important;
        box-shadow: 0 18px 32px rgba(255, 59, 48, 0.35);
        transition: background 0.2s ease, transform 0.2s ease, opacity 0.2s ease;
        margin-left: 4px;
      }

      #send-icon-button::after {
        content: "Send";
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.35px;
        color: #ffffff;
      }

      #send-icon {
        display: none;
      }

      #send-icon-button:not(.active) {
        opacity: 0.35;
        pointer-events: none;
        box-shadow: none;
      }

      #send-icon-button.active {
        opacity: 1;
      }

      #send-icon-button.active:hover {
        transform: translateY(-1px);
        background: #ff4f44 !important;
      }

      #send-icon-button.active:focus-visible {
        outline: 2px solid rgba(255, 59, 48, 0.5);
        outline-offset: 3px;
      }
    `
  );
};

const AVATAR_IMAGE = "https://storage.googleapis.com/vamsidharvennabot/picture/dddd.png";

const applyBubbleTheme = (): boolean => {
  const bubble = document.querySelector(
    "df-messenger-chat-bubble"
  ) as DFMessengerElement | null;
  const bubbleShadow = bubble?.shadowRoot;
  if (!bubbleShadow) return false;

  ensureShadowStyle(
    bubbleShadow,
    "df-custom-chat-bubble",
    `
      :host {
        --bubble-size: 96px;
        position: fixed !important;
        bottom: 24px !important;
        right: 32px !important;
        z-index: 999;
        transition: opacity 0.25s ease, transform 0.25s ease;
      }

        height: var(--chat-ring-size);
      }

      :host::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background-repeat: no-repeat;
        background-size: contain;
        animation: bubble-text-spin 10s linear infinite;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 220 220'%3E%3Cdefs%3E%3Cpath id='circlePath' d='M110,110 m-95,0 a95,95 0 1,1 190,0 a95,95 0 1,1 -190,0'/%3E%3C/defs%3E%3Ctext fill='%23ff3b30' font-size='14' font-weight='700' letter-spacing='6'%3E%3CtextPath xlink:href='%23circlePath' startOffset='0'%3ECHAT WITH ME ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ CHAT WITH ME ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ CHAT WITH ME ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ %3C/textPath%3E%3C/text%3E%3C/svg%3E");
      }

      .chat-bubble-default-wrapper {
        position: absolute !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
        width: var(--bubble-size) !important;
        height: var(--bubble-size) !important;
      }

      .container {
        width: 100% !important;
        height: 100% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }

      .bubble {
        width: var(--bubble-size) !important;
        height: var(--bubble-size) !important;
        border-radius: 50% !important;
        border: none !important;
        padding: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        position: relative;
        overflow: hidden;
      }

      .bubble .icon,
      .bubble .icon svg,
      .bubble .close-icon {
        display: none !important;
      }

      .bubble::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background-image: url("${AVATAR_IMAGE}");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 1;
      }


      @keyframes bubble-ring-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes bubble-text-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `
  );

  return true;
};

const AnimatedChatWidget: React.FC<AnimatedChatWidgetProps> = ({ className = "" }) => {
  const [ready, setReady] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const messengerRef = useRef<DFMessengerElement | null>(null);

  const dismissPrompt = () => {
    setShowPrompt(false);
  };

  useEffect(() => {
    const alreadyDefined = window.customElements?.get("df-messenger");
    if (window.dfMessengerLoaded || alreadyDefined) {
      setReady(true);
      return;
    }

    let script = Array.from(document.scripts).find((s) => s.src === DF_SCRIPT_SRC);
    if (!script) {
      script = document.createElement("script");
      script.src = DF_SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }

    const handleLoaded = () => {
      window.dfMessengerLoaded = true;
      setReady(true);
    };

    script.addEventListener("load", handleLoaded);
    return () => script?.removeEventListener("load", handleLoaded);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const node = messengerRef.current;
    if (!node) return;

    const updateExpanded = () => setExpanded(node.hasAttribute("expanded"));
    updateExpanded();

    const observer = new MutationObserver(updateExpanded);
    observer.observe(node, { attributes: true, attributeFilter: ["expanded"] });

    return () => observer.disconnect();
  }, [ready]);

  useEffect(() => {
    if (!ready) return;
    const bubble = document.querySelector("df-messenger-chat-bubble") as HTMLElement | null;
    if (!bubble) return;
    if (expanded) {
      bubble.setAttribute("data-hidden", "true");
      dismissPrompt();
    } else {
      bubble.removeAttribute("data-hidden");
    }
  }, [ready, expanded]);

  useEffect(() => {
    if (!ready || !showPrompt) return;
    const bubble = document.querySelector("df-messenger-chat-bubble");
    const handleClick = () => dismissPrompt();
    bubble?.addEventListener("click", handleClick);
    return () => bubble?.removeEventListener("click", handleClick);
  }, [ready, showPrompt]);

  useEffect(() => {
    if (!ready) return;
    const node = messengerRef.current;
    if (!node) return;

    let observer: MutationObserver | null = null;
    let retryTimer: number | null = null;
    let bubbleTimer: number | null = null;

    const applyCustomDecorators = () => {
      applySendButtonTheme(node);
      applyBubbleTheme();
    };

    const startObserver = () => {
      const root = node.shadowRoot;
      if (!root || observer) return false;
      observer = new MutationObserver(applyCustomDecorators);
      observer.observe(root, { childList: true, subtree: true });
      return true;
    };

    applyCustomDecorators();

    bubbleTimer = window.setInterval(() => {
      if (applyBubbleTheme() && bubbleTimer) {
        window.clearInterval(bubbleTimer);
        bubbleTimer = null;
      }
    }, 250);

    if (!startObserver()) {
      retryTimer = window.setInterval(() => {
        applyCustomDecorators();
        if (startObserver() && retryTimer) {
          window.clearInterval(retryTimer);
          retryTimer = null;
        }
      }, 200);
    }

    return () => {
      observer?.disconnect();
      if (retryTimer) {
        window.clearInterval(retryTimer);
      }
      if (bubbleTimer) {
        window.clearInterval(bubbleTimer);
      }
    };
  }, [ready]);

  if (!ready) return null;

  return (
    <div className={`chat-shell ${expanded ? "chat-shell--open" : ""} ${className}`}>
      {showPrompt && (
        <div className="chat-prompt" role="status">
          <span>Need assistance? I&apos;m here to chat.</span>
          <button
            type="button"
            aria-label="Dismiss chat prompt"
            onClick={dismissPrompt}
          >
            &times;
          </button>
        </div>
      )}
      <df-messenger
        ref={messengerRef}
        location="us"
        project-id="vamsidharvennabot"
        agent-id="3b7c3a47-2227-4ae0-8977-480faefb189e"
        language-code="en"
        chat-title="Vamsidhar Support"
        chat-subtitle=""
        placeholder-text="Message..."
        bot-writing-text="Vamsidhar is typing..."
        intent="WELCOME"
      >
        <df-messenger-chat-bubble chat-title="Vamsidhar Support"></df-messenger-chat-bubble>
      </df-messenger>
    </div>
  );
};

export default AnimatedChatWidget;

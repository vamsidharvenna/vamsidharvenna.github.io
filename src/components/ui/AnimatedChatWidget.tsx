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
  if (root.getElementById(id)) return;
  const style = document.createElement("style");
  style.id = id;
  style.textContent = css;
  root.appendChild(style);
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

const AnimatedChatWidget: React.FC<AnimatedChatWidgetProps> = ({ className = "" }) => {
  const [ready, setReady] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const messengerRef = useRef<DFMessengerElement | null>(null);

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
    const node = messengerRef.current;
    if (!node) return;

    let observer: MutationObserver | null = null;
    let retryTimer: number | null = null;

    const applyCustomDecorators = () => applySendButtonTheme(node);

    const startObserver = () => {
      const root = node.shadowRoot;
      if (!root || observer) return false;
      observer = new MutationObserver(applyCustomDecorators);
      observer.observe(root, { childList: true, subtree: true });
      return true;
    };

    applyCustomDecorators();

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
    };
  }, [ready]);

  if (!ready) return null;

  return (
    <div className={`chat-shell ${expanded ? "chat-shell--open" : ""} ${className}`}>
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

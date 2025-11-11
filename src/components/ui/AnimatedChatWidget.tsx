import React, { useEffect, useRef, useState } from "react";
import "./AnimatedChatWidget.css";

interface AnimatedChatWidgetProps {
  className?: string;
}

type DFMessengerElement = HTMLElement & {
  shadowRoot?: ShadowRoot | null;
};

const DF_SCRIPT_SRC =
  "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
const AnimatedChatWidget: React.FC<AnimatedChatWidgetProps> = ({ className = "" }) => {
  const [isMessengerReady, setIsMessengerReady] = useState(false);
  const messengerRef = useRef<DFMessengerElement | null>(null);

  useEffect(() => {
    const alreadyDefined = window.customElements?.get("df-messenger");
    if (window.dfMessengerLoaded || alreadyDefined) {
      setIsMessengerReady(true);
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
      setIsMessengerReady(true);
    };

    script.addEventListener("load", handleLoaded);
    return () => {
      script?.removeEventListener("load", handleLoaded);
    };
  }, []);

  if (!isMessengerReady) {
    return null;
  }

  return (
    <div className={`animated-chat-widget-container ${className}`}>
      <df-messenger
        ref={messengerRef}
        location="us"
        project-id="vamsidharvennabot"
        agent-id="3b7c3a47-2227-4ae0-8977-480faefb189e"
        language-code="en"
        chat-title="Vamsidhar Support"
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

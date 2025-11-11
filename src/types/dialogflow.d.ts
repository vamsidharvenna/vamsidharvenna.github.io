import type React from "react";

declare global {
  interface Window {
    dfMessengerLoaded?: boolean;
  }

  namespace React.JSX {
    interface IntrinsicElements {
      "df-messenger": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "project-id": string;
        "agent-id": string;
        "language-code": string;
        location?: string;
        intent?: string;
        "chat-title"?: string;
        "chat-subtitle"?: string;
        "placeholder-text"?: string;
        "bot-writing-text"?: string;
        expand?: string;
      };
      "df-messenger-chat-bubble": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "chat-title"?: string;
        "chat-subtitle"?: string;
        "chat-icon"?: string;
      };
    }
  }
}

export {};

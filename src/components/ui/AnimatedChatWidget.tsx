import React, { useEffect } from 'react';

interface AnimatedChatWidgetProps
{
    className?: string;
}

const AnimatedChatWidget: React.FC<AnimatedChatWidgetProps> = ( { className = '' } ) =>
{
    useEffect( () =>
    {
        // Add Dialogflow Script
        const dfScript = document.createElement( 'script' );
        dfScript.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
        dfScript.async = true;
        document.head.appendChild( dfScript );

        // Add basic positioning CSS for the messenger
        const basicStyle = document.createElement( 'style' );
        basicStyle.textContent = `
            df-messenger {
                position: fixed !important;
                bottom: 24px !important;
                right: 24px !important;
                z-index: 1000 !important;
            }
        `;
        document.head.appendChild( basicStyle );

        // Cleanup function
        return () =>
        {
            const existingScript = document.querySelector( 'script[src*="df-messenger"]' );
            if ( existingScript )
            {
                document.head.removeChild( existingScript );
            }
            if ( basicStyle.parentNode )
            {
                document.head.removeChild( basicStyle );
            }
        };
    }, [] );

    return (
        <div className={`animated-chat-widget-container ${ className }`}>
            {/* Simple Dialogflow Messenger with Default Icon */}
            <div dangerouslySetInnerHTML={{
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
                `
            }} />
        </div>
    );
};

export default AnimatedChatWidget;
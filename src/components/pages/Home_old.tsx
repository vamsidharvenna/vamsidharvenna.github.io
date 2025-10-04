import React, { useEffect, useState } from 'react';
import { portfolioConfig } from '../../config/portfolio';
import Icon from '../ui/Icon';
import Navigation from '../ui/Navigation';

const Home: React.FC = () =>
{
    const [ isChatOpen, setIsChatOpen ] = useState( false );

    const openChat = () =>
    {
        setIsChatOpen( true );

        // Wait for the DOM to update, then programmatically open the chat
        setTimeout( () =>
        {
            const dfMessenger = document.querySelector( 'df-messenger' ) as any;
            if ( dfMessenger )
            {
                // Trigger the chat to open programmatically
                dfMessenger.setAttribute( 'intent', 'Default Welcome Intent' );

                // If there's a method to open the chat, call it
                if ( typeof dfMessenger.openChat === 'function' )
                {
                    dfMessenger.openChat();
                }
            }
        }, 100 );
    };

    const closeChat = () =>
    {
        setIsChatOpen( false );
    };

    useEffect( () =>
    {
        // Add Dialogflow Script
        const dfScript = document.createElement( 'script' );
        dfScript.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
        dfScript.async = true;
        document.head.appendChild( dfScript );

        // Add custom styles with animations and revolving text
        const style = document.createElement( 'style' );
        style.textContent = `
            /* Hide default df-messenger chat bubble completely */
            df-messenger {
                --df-messenger-chat-bubble-size: 0px !important;
            }
            
            /* Hide the default chat bubble icon */
            df-messenger df-messenger-chat-bubble {
                display: none !important;
            }
            
            /* Hide the entire messenger initially */
            df-messenger df-messenger-chat {
                display: none !important;
            }
            
            /* Show chat interface when opened */
            .chat-opened df-messenger df-messenger-chat {
                display: block !important;
                position: fixed !important;
                bottom: 16px !important;
                right: 16px !important;
                width: 400px !important;
                height: 600px !important;
                z-index: 999 !important;
            }
            
            /* Custom animated chat widget */
            .custom-chat-widget {
                position: fixed;
                bottom: 24px;
                right: 24px;
                width: 80px;
                height: 80px;
                z-index: 1000;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .custom-chat-widget:hover {
                transform: scale(1.1);
            }
            
            /* Revolving text container */
            .revolving-text-container {
                position: absolute;
                width: 120px;
                height: 120px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                animation: rotate 10s linear infinite;
            }
            
            @keyframes rotate {
                from { transform: translate(-50%, -50%) rotate(0deg); }
                to { transform: translate(-50%, -50%) rotate(360deg); }
            }
            
            /* Individual text characters */
            .revolving-text {
                position: absolute;
                font-size: 11px;
                font-weight: 600;
                color: #0D9488;
                font-family: 'Arial', sans-serif;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            /* Chat icon container */
            .chat-icon-container {
                position: absolute;
                width: 56px;
                height: 56px;
                background: linear-gradient(135deg, #0D9488, #14B8A6);
                border-radius: 50%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 8px 25px rgba(13, 148, 136, 0.3);
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0% {
                    box-shadow: 0 8px 25px rgba(13, 148, 136, 0.3);
                }
                50% {
                    box-shadow: 0 8px 35px rgba(13, 148, 136, 0.5);
                }
                100% {
                    box-shadow: 0 8px 25px rgba(13, 148, 136, 0.3);
                }
            }
            
            /* Chat icon SVG */
            .chat-icon {
                width: 28px;
                height: 28px;
                fill: white;
            }
            
            /* Notification dot */
            .notification-dot {
                position: absolute;
                top: 8px;
                right: 8px;
                width: 12px;
                height: 12px;
                background: #EF4444;
                border-radius: 50%;
                border: 2px solid white;
                animation: blink 1.5s infinite;
            }
            
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0.3; }
            }
            
            /* Ripple effect */
            .ripple {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 80px;
                height: 80px;
                border: 2px solid #0D9488;
                border-radius: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
                animation: ripple 2s infinite;
            }
            
            @keyframes ripple {
                0% {
                    width: 56px;
                    height: 56px;
                    opacity: 1;
                }
                100% {
                    width: 100px;
                    height: 100px;
                    opacity: 0;
                }
            }
            
            /* Show df-messenger when chat is opened */
            .chat-opened df-messenger {
                display: block !important;
            }
            
            /* Keep custom widget visible but change its appearance when chat is open */
            .chat-opened .custom-chat-widget {
                transform: scale(0.8);
                opacity: 0.7;
                pointer-events: none;
            }
        `;
        document.head.appendChild( style );

        // Cleanup function
        return () =>
        {
            document.head.removeChild( dfScript );
            document.head.removeChild( style );
        };
    }, [] );

    // Function to generate revolving text characters
    const generateRevolvingText = () =>
    {
        const text = "• ASK ME ANYTHING • CHAT WITH VAMSIDHAR ";
        const radius = 45;

        return text.split( '' ).map( ( char, index ) =>
        {
            const angle = ( index * 360 ) / text.length;
            const x = Math.cos( ( angle * Math.PI ) / 180 ) * radius;
            const y = Math.sin( ( angle * Math.PI ) / 180 ) * radius;

            return (
                <span
                    key={index}
                    className="revolving-text"
                    style={{
                        transform: `translate(${ x }px, ${ y }px) rotate(${ angle + 90 }deg)`,
                        transformOrigin: 'center'
                    }}
                >
                    {char}
                </span>
            );
        } );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Fixed Left Sidebar */}
            <div className="fixed left-0 top-16 w-48 h-full bg-white shadow-lg border-r border-gray-200 z-10 overflow-y-auto">
                <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Connect</h2>

                    {/* Social Links */}
                    <div className="space-y-3">
                        {portfolioConfig.socialLinks.map( ( social ) => (
                            <a
                                key={social.platform}
                                href={social.url}
                                target={social.platform !== "Email" ? "_blank" : undefined}
                                rel={social.platform !== "Email" ? "noopener noreferrer" : undefined}
                                className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 transition-colors duration-200"
                            >
                                <Icon name={social.icon} className="w-5 h-5" />
                                <span className="text-sm">{social.platform}</span>
                            </a>
                        ) )}
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="ml-48 px-8 py-8">
                <div className="max-w-none">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-sm p-8">
                            <div className="text-center mb-6">
                                <div className="w-60 h-60 mx-auto mb-4">
                                    <img
                                        src={portfolioConfig.personalInfo.avatar}
                                        alt={portfolioConfig.personalInfo.name}
                                        className="w-full h-full rounded-full object-cover border-4 border-gray-200"
                                    />
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    {portfolioConfig.personalInfo.name}
                                </h1>
                                <p className="text-xl text-gray-600 mb-6">
                                    {portfolioConfig.personalInfo.title}
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto mb-6">
                                    {portfolioConfig.personalInfo.bio}
                                </p>
                                <div className="flex items-center justify-center space-x-3 text-gray-600 mt-4">
                                    <Icon name='location' className="w-5 h-5" />
                                    <p className="text-xl text-gray-600">
                                        <span>{portfolioConfig.personalInfo.location}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animated Chat Widget */}
            <div className={isChatOpen ? 'chat-opened' : ''}>
                <div className="custom-chat-widget" onClick={openChat}>
                    <div className="ripple"></div>
                    <div className="revolving-text-container">
                        {generateRevolvingText()}
                    </div>
                    <div className="chat-icon-container">
                        <svg className="chat-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                        </svg>
                        <div className="notification-dot"></div>
                    </div>
                </div>

                <div dangerouslySetInnerHTML={{
                    __html: `
                        <df-messenger
                            location="us"
                            project-id="vamsidharvennabot"
                            agent-id="3b7c3a47-2227-4ae0-8977-480faefb189e"
                            language-code="en"
                            max-query-length="-1"
                            allow-feedback="false"
                            chat-icon="null">
                            <df-messenger-chat-bubble
                                chat-title="Chat with Vamsidhar"
                                placeholder-text="Type your message...">
                            </df-messenger-chat-bubble>
                        </df-messenger>
                    `
                }} />

                {/* Close chat button when chat is open */}
                {isChatOpen && (
                    <button
                        onClick={closeChat}
                        className="fixed bottom-24 right-24 w-12 h-12 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-all duration-200 z-[1001] flex items-center justify-center"
                        title="Close Chat"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Home;
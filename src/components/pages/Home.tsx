import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import Icon from '../ui/Icon';
import Navigation from '../ui/Navigation';
import AnimatedChatWidget from '../ui/AnimatedChatWidget';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Fixed Left Sidebar */}
            <div className="fixed left-0 top-16 w-48 h-full bg-white shadow-lg border-r border-gray-200 z-10 overflow-y-auto">
                <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Connect</h2>

                    {/* Social Links */}
                    <div className="space-y-3">
                        {portfolioConfig.socialLinks.map((social) => (
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
                        ))}
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

            {/* Animated Chat Widget Component */}
            <AnimatedChatWidget />
        </div>
    );
};

export default Home;
import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import AnimatedChatWidget from '../ui/AnimatedChatWidget';
import Icon from '../ui/Icon';
import Navigation from '../ui/Navigation';

const Home: React.FC = () =>
{
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Fixed Left Sidebar */}
            <div className="fixed left-0 top-16 w-40 h-full bg-gradient-to-b from-white via-slate-50 to-slate-100/70 shadow-[8px_0_30px_rgba(15,35,56,0.08)] border-r border-slate-200/70 z-10 overflow-y-auto">
                <div className="px-5 py-8">
                    <h2 className="text-lg font-semibold text-slate-900 mb-5 tracking-wide">Connect</h2>

                    {/* Social Links */}
                    <div className="space-y-3">
                        {portfolioConfig.socialLinks.map( ( social ) => (
                            <a
                                key={social.platform}
                                href={social.url}
                                target={social.platform !== "Email" ? "_blank" : undefined}
                                rel={social.platform !== "Email" ? "noopener noreferrer" : undefined}
                                className="flex items-center space-x-3 text-slate-600 hover:text-teal-600 transition-colors duration-200"
                            >
                                <Icon name={social.icon} className="w-5 h-5" />
                                <span className="text-sm">{social.platform}</span>
                            </a>
                        ) )}
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="ml-40 px-8 py-8">
                <div className="max-w-none">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            <div
                                className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-teal-100/70 via-white to-sky-100/60 blur-3xl opacity-70 pointer-events-none"
                                aria-hidden="true"
                            />
                            <div className="relative bg-white/95 backdrop-blur-sm rounded-[28px] border border-white/60 shadow-[0_35px_90px_rgba(13,59,102,0.22)] p-10">
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
            </div>
            <AnimatedChatWidget />
        </div>
    );
};

export default Home;

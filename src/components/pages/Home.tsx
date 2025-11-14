import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import AnimatedChatWidget from '../ui/AnimatedChatWidget';
import Icon from '../ui/Icon';
import Navigation from '../ui/Navigation';

const hoverColors: Record<string, string> = {
    github: 'hover:text-slate-900',
    linkedin: 'hover:text-sky-600',
    whatsapp: 'hover:text-green-500',
    email: 'hover:text-rose-500',
    mail: 'hover:text-rose-500',
};

const availability = [
    { icon: '✅', color: 'text-cyan-500', label: 'Open to Full-time' },
    { icon: '📄', color: 'text-indigo-500', label: 'Open to Contract roles' },
    { icon: '🌐', color: 'text-emerald-500', label: 'Open to Remote work' },
    { icon: '📍', color: 'text-rose-500', label: 'Open to Onsite (relocation flexible)' },
];

const Home: React.FC = () =>
{
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Fixed Left Sidebar */}
            <div className="w-full bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200/50 lg:border-b-0 lg:border-r lg:border-slate-200/70 lg:fixed lg:left-0 lg:top-16 lg:h-full lg:w-48 lg:z-10 lg:overflow-y-auto">
                <div className="px-5 py-8 space-y-6">
                    <div className="bg-white/95 backdrop-blur rounded-2xl border border-white/70 shadow-[0_25px_60px_rgba(15,35,56,0.08)] p-5 space-y-4">
                        <h2 className="text-lg font-semibold text-slate-900 tracking-wide mb-4">Connect</h2>

                        {/* Social Links */}
                        <div className="space-y-3 pb-3 border-b border-slate-100/70">
                            {portfolioConfig.socialLinks.map((social, index) => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target={social.platform !== "Email" ? "_blank" : undefined}
                                    rel={social.platform !== "Email" ? "noopener noreferrer" : undefined}
                                    className={`flex items-center space-x-3 text-slate-600 transition-colors duration-150 ${
                                        index !== portfolioConfig.socialLinks.length - 1 ? 'pb-2 border-b border-slate-100/70' : ''
                                    } ${hoverColors[social.icon as keyof typeof hoverColors] ?? 'hover:text-cyan-500'}`}
                                >
                                    <Icon name={social.icon} className="w-4 h-4 text-teal-500" />
                                    <span className="text-sm font-medium">{social.platform}</span>
                                </a>
                            ))}
                        </div>

                        <div className="pt-2">
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Resume</p>
                            <a
                                href="https://storage.googleapis.com/vamsidharvennabot/resume/vamsi%20conversational%20ai%20developer%20resume%20ip.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-between rounded-xl border border-cyan-200 bg-gradient-to-r from-white to-cyan-50 px-4 py-3 text-sm font-semibold text-cyan-700 hover:from-cyan-50 hover:to-white transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                <span>Download Resume</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M12 3.75a.75.75 0 01.75.75v8.69l2.47-2.47a.75.75 0 111.06 1.06l-3.78 3.78a.75.75 0 01-1.06 0l-3.78-3.78a.75.75 0 011.06-1.06l2.47 2.47V4.5A.75.75 0 0112 3.75z" />
                                    <path d="M5.25 14.25a.75.75 0 01.75.75v2.25A1.5 1.5 0 007.5 18.75h9a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v2.25a3 3 0 01-3 3h-9a3 3 0 01-3-3V15a.75.75 0 01.75-.75z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="border-t border-slate-200/70 mx-1" />

                    <div className="rounded-2xl border border-white/60 bg-gradient-to-br from-slate-50/60 to-slate-100/80 shadow-inner p-5">
                        <p className="text-xs tracking-widest font-semibold text-slate-500 uppercase mb-3">Availability</p>
                        <ul className="space-y-3 text-sm font-medium text-slate-600 leading-[1.35rem]">
                            {availability.map(({ icon, color, label }) => (
                                <li key={label} className="flex items-center space-x-3">
                                    <span className={`${color} text-base`}>{icon}</span>
                                    <span>{label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="px-4 sm:px-6 lg:px-8 py-8 mt-6 lg:mt-0 lg:ml-48">
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

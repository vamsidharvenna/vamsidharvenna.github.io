import React from "react";
import { portfolioConfig } from "../../config/portfolio";
import CustomChatWidget from "../ui/CustomChatWidget";
import Footer from "../ui/Footer";
import Navigation from "../ui/Navigation";

const About: React.FC = () =>
{
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-6 lg:mt-8">
                <div className="relative">
                    <div
                        className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-teal-100/70 via-white to-sky-100/60 blur-3xl opacity-70 pointer-events-none"
                        aria-hidden="true"
                    />
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-[28px] border border-white/60 shadow-[0_35px_90px_rgba(13,59,102,0.18)] p-8">
                    <div className="text-center mb-8">
                        <div className="w-32 h-32 mx-auto mb-6">
                            <img
                                src={portfolioConfig.personalInfo.avatar}
                                alt={portfolioConfig.personalInfo.name}
                                className="w-full h-full rounded-full object-cover border-4 border-teal-200"
                            />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            About {portfolioConfig.personalInfo.name}
                        </h1>
                        <p className="text-lg text-gray-600">
                            {portfolioConfig.personalInfo.title}
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="text-lg leading-relaxed mb-6">
                                {portfolioConfig.personalInfo.bio}
                            </p>

                            <p className="leading-relaxed mb-6">
                                I care about building trustworthy, high-accuracy conversational AI that feels natural, responds with low latency, and delivers measurable business impact. My approach blends GenAI, prompt engineering, and UX-driven design to create intelligent assistants that are reliable, context-aware, and genuinely helpful to users.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-200 pb-2">
                                What I Do
                            </h2>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-3 mt-1">•</span>
                                    <span>Design and develop enterprise conversational AI systems using Dialogflow CX, Playbooks, Kore.ai XO 11,IBM watson x, and LLMS.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-3 mt-1">•</span>
                                    <span>Build GenAI-driven conversational flows, including agentic logic, generators, data stores, and contextual reasoning.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-3 mt-1">•</span>
                                    <span>Train and refine NLP models (intents, entities, multi-intent detection, context handling) using LLMs like Gemini and GPT-4o.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-3 mt-1">•</span>
                                    <span>Integrate virtual assistants with backend systems using webhooks, REST APIs, Cloud Functions, Firestore, and SQL databases.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-3 mt-1">•</span>
                                    <span>Implement omnichannel experiences across chat, voice, IVR, and mobile using STT, TTS, and SSML.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-3 mt-1">•</span>
                                    <span>Optimize prompts and tune LLM behavior for business-specific tasks, reasoning flows, and production-grade accuracy.</span>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-200 pb-2">
                                My Philosophy
                            </h2>
                            <p className="leading-relaxed mb-8">
                                I believe conversational AI should enhance human capability — not replace it. The best virtual assistants are transparent, context-aware, and grounded in real business value. My work is guided by reliability, user-centric design, ethical GenAI practices, and continuous improvement through data, analytics, and customer feedback. Every solution I build aims to make interactions simpler, faster, and more meaningful for the end user.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg text-center">
                                <h3 className="font-bold text-gray-800 mb-2">Current Location</h3>
                                <p className="text-gray-600">{portfolioConfig.personalInfo.location}</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg text-center">
                                <h3 className="font-bold text-gray-800 mb-2">Availability</h3>
                                <p className="text-gray-600">Open to new opportunities</p>
                            </div>
                            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg text-center">
                                <h3 className="font-bold text-gray-800 mb-2">Specialization</h3>
                                <p className="text-gray-600">Conversational AI Developer & Prompt engineer</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div>
                                    <p className="text-2xl font-bold text-teal-600">7+</p>
                                    <p className="text-sm text-gray-600">Enterprise Chatbots</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-teal-600">25%</p>
                                    <p className="text-sm text-gray-600">fallback reduction</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-teal-600">92%</p>
                                    <p className="text-sm text-gray-600">intent accuracy</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-teal-600">40%</p>
                                    <p className="text-sm text-gray-600">CX Improvement</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <CustomChatWidget />
            <Footer />
        </div>
    );
};

export default About;

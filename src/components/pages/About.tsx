import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import Footer from '../ui/Footer';
import Navigation from '../ui/Navigation';

const About: React.FC = () =>
{
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-sm p-8">
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
                                I care about trustworthy GenAI, latency, and developing solutions that deliver
                                real business value. My approach combines technical expertise with user-centered
                                design to create conversational experiences that feel natural and helpful.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-200 pb-2">
                                What I Do
                            </h2>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-3 mt-1">•</span>
                                    <span>Design and implement enterprise-grade conversational AI systems using Dialogflow CX and Kore.ai</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-3 mt-1">•</span>
                                    <span>Build RAG (Retrieval Augmented Generation) systems for accurate, context-aware responses</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-3 mt-1">•</span>
                                    <span>Engineer data pipelines that power intelligent conversational experiences</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-3 mt-1">•</span>
                                    <span>Optimize prompts and fine-tune LLMs for specific business use cases</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-3 mt-1">•</span>
                                    <span>Integrate conversational interfaces with existing enterprise systems</span>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-200 pb-2">
                                My Philosophy
                            </h2>
                            <p className="leading-relaxed mb-8">
                                I believe that the best conversational AI solutions are those that solve real problems
                                and enhance human capabilities rather than replace them. Every project I work on is
                                guided by principles of reliability, transparency, and measurable impact on user experience.
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
                                <p className="text-gray-600">Conversational AI & Data Engineering</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div>
                                    <p className="text-2xl font-bold text-teal-600">15+</p>
                                    <p className="text-sm text-gray-600">Enterprise Chatbots</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-teal-600">70%</p>
                                    <p className="text-sm text-gray-600">Response Time Reduction</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-teal-600">95%</p>
                                    <p className="text-sm text-gray-600">Query Accuracy</p>
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

            <Footer />
        </div>
    );
};

export default About;
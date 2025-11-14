import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import AnimatedChatWidget from '../ui/AnimatedChatWidget';
import Footer from '../ui/Footer';
import Icon from '../ui/Icon';
import Navigation from '../ui/Navigation';

const Projects: React.FC = () =>
{
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="relative">
                    <div
                        className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-teal-100/60 via-white to-sky-100/50 blur-3xl opacity-70 pointer-events-none"
                        aria-hidden="true"
                    />
                    <div className="relative rounded-[32px] border border-white/60 bg-white/95 backdrop-blur-sm shadow-[0_35px_90px_rgba(13,59,102,0.12)] p-8 space-y-10">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">Projects</h1>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Explore enterprise-grade conversational AI, Gen AI, and automation work built with Dialogflow CX, Kore.ai XO, IBM Watson Assistant, Cloud Run stacks, and production LLM workflows.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {portfolioConfig.projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
                                            {project.featured && (
                                                <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-full">
                                                    Featured
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-gray-600 mb-4">{project.description}</p>
                                        <p className="text-gray-700 text-sm mb-4 leading-relaxed">{project.longDescription}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex space-x-4 text-sm">
                                            {project.demoUrl && (
                                                <a
                                                    href={project.demoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center text-teal-600 hover:text-teal-700 font-medium"
                                                >
                                                    <Icon name="external-link" className="w-4 h-4 mr-1" />
                                                    Live Demo
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center text-gray-600 hover:text-gray-700 font-medium"
                                                >
                                                    <Icon name="github" className="w-4 h-4 mr-1" />
                                                    View Code
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Impact &amp; Results</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl font-bold text-teal-600">7+</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Enterprise Chatbots</h3>
                                    <p className="text-gray-600 text-sm">Delivered across telecom, finance, and public sector</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl font-bold text-blue-600">25%</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Fallback Reduction</h3>
                                    <p className="text-gray-600 text-sm">Average drop in escalations and errors</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl font-bold text-purple-600">92%</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Intent Accuracy</h3>
                                    <p className="text-gray-600 text-sm">Domain-specific NLP accuracy in production</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl font-bold text-green-600">20%</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">CX Improvement</h3>
                                    <p className="text-gray-600 text-sm">Measured uplift in CSAT &amp; containment</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technologies &amp; Frameworks</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[ 'Dialogflow CX', 'Kore.ai XO11', 'IBM Watson Assistant', 'Playbooks', 'Vertex AI', 'OpenAI GPT', 'Prompt Engineering', 'Python', 'SQL', 'Node.js', 'JavaScript', 'Google Cloud', 'REST APIs', 'Webhooks' ].map((tech) => (
                                    <div key={tech} className="bg-white p-3 rounded-lg text-center">
                                        <span className="font-medium text-gray-800">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatedChatWidget />
            <Footer />
        </div>
    );
};

export default Projects;

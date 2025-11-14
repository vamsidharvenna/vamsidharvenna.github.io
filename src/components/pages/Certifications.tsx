import React from 'react';
import AnimatedChatWidget from '../ui/AnimatedChatWidget';
import Footer from '../ui/Footer';
import Navigation from '../ui/Navigation';

const Certifications: React.FC = () =>
{
    const certifications = [
        {
            id: 1,
            name: "Google Prompting Essentials Specialization",
            issuer: "Google Cloud",
            date: "2025",
            credentialId: "D19M1E16N5C5",
            URL: "https://coursera.org/verify/specialization/D19M1E16N5C5",
            description: "Earned Google's Prompting Essentials certification, strengthening skills in advanced prompting techniques, multimodal prompting, and reusable prompt design.",
            category: "Prompt Engineering"
        },
        {
            id: 2,
            name: "Prompt Engineering",
            issuer: "Vanderbilt University",
            date: "2025",
            credentialId: "WII8WVHJMZNM",
            URL: "https://www.coursera.org/account/accomplishments/specialization/WII8WVHJMZNM",
            description: "Completed Vanderbilt Prompt Engineering Specialization covering reusable prompt design, LLM-based analysis, and responsible generative AI.",
            category: "Prompt Engineering"
        },
        {
            id: 3,
            name: "Advanced Prompt Engineering ",
            issuer: "Simplilearn",
            date: "2025",
            credentialId: "ZUQGF0VUXXID",
            URL: "https://coursera.org/verify/ZUQGF0VUXXID",
            description: "Earned Advanced Prompt Engineering certification focused on structured reasoning, prompt optimization, LangChain workflows, and RAG-based data generation.",
            category: "Prompt Engineering"
        },
        {
            id: 4,
            name: "Automation AI Basic Training by Kore.ai",
            issuer: "Kore.ai",
            date: "2025",
            credentialId: "XO 11",
            URL: "https://academy.kore.ai/",
            description: "Completed Kore.ai Automation AI Basic Training with hands-on skills in agent nodes, automation flows, LLM integrations, and building intelligent virtual assistants.",
            category: "Conversational AI"
        },
        {
            id: 5,
            name: "Automation AI Advanced Training by Kore.ai!",
            issuer: "Kore.ai",
            date: "2025",
            credentialId: "XO 11",
            URL: "https://academy.kore.ai/",
            description: "Certified in Kore.ai Automation AI Advanced Training with hands-on expertise in advanced conversational flows, multilingual enablement, analytics, and secure LLM-powered automation.",
            category: "Conversational AI"
        },
        {
            id: 6,
            name: "Building a Virtual Agent with Dialogflow CX",
            issuer: "Google",
            date: "2022",
            credentialId: "1124",
            URL: "https://www.cloudskillsboost.google/course_templates/1124/badge",
            description: "Learned core Dialogflow CX design principles, building virtual agents with intents, entities, flows, and webhook integrations.",
            category: "Conversational AI"
        },
        {
            id: 7,
            name: "Kore.ai Experience Optimization Platform Developers Basic Training",
            issuer: "Kore.ai",
            date: "2023",
            credentialId: "Xo 8",
            URL: "https://academy.kore.ai/",
            description: "Completed Kore.ai XO basic training covering virtual assistant development, NLP configuration, and platform workflow fundamentals.",
            category: "Conversational AI"
        },
        {
            id: 8,
            name: " Google Cloud Professional Data Engineer",
            issuer: "Google",
            date: "2024",
            credentialId: "dcc086514fa54a8f842bfad4a2a20280",
            URL: "https://www.credly.com/badges/fbc717f1-859f-4610-99e9-a52410916466/public_url",
            description: "Certified in designing, building, and operationalizing secure, scalable data pipelines on Google Cloud for analytics and machine learning.",
            category: "Data Engineering"
        }

    ];

    const categorizedCerts = certifications.reduce( ( acc, cert ) =>
    {
        if ( !acc[ cert.category ] ) acc[ cert.category ] = [];
        acc[ cert.category ].push( cert );
        return acc;
    }, {} as Record<string, typeof certifications> );

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-6 lg:mt-8">
                <div className="relative">
                    <div
                        className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-teal-100/60 via-white to-sky-100/50 blur-3xl opacity-70 pointer-events-none"
                        aria-hidden="true"
                    />
                    <div className="relative rounded-[32px] border border-white/60 bg-white/95 backdrop-blur-sm shadow-[0_35px_90px_rgba(13,59,102,0.12)] p-8 space-y-10">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h1>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Professional certifications demonstrating expertise in Conversational AI, GenAI prompting, RAG, and data engineering.
                            </p>
                        </div>

                        {/* Certifications by Category */}
                        <div className="space-y-8">
                            {Object.entries( categorizedCerts ).map( ( [ category, certs ] ) => (
                                <div key={category} className="bg-white rounded-lg shadow-sm p-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-teal-200 pb-2">
                                        {category}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {certs.map( ( cert ) => (
                                            <div key={cert.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                                <div className="flex items-start justify-between mb-3">
                                                    <h3 className="font-bold text-lg text-gray-900 leading-tight">{cert.name}</h3>
                                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                                                        {cert.date}
                                                    </span>
                                                </div>
                                                <p className="text-teal-600 font-semibold mb-2">{cert.issuer}</p>
                                                <p className="text-gray-600 mb-3 leading-relaxed">{cert.description}</p>
                                                <a href={cert.URL} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-sm mb-2 inline-block">
                                                    View Credential
                                                </a>
                                                <div className="text-sm text-gray-500 bg-gray-50 p-2 rounded">
                                                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                                                </div>
                                            </div>
                                        ) )}
                                    </div>
                                </div>
                            ) )}
                        </div>

                        {/* Summary Stats */}
                        <div className="bg-white rounded-lg shadow-sm p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certification Summary</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                <div>
                                    <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl font-bold text-teal-600">{certifications.length}</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Total Certifications</h3>
                                    <p className="text-gray-600 text-sm">Across multiple domains</p>
                                </div>
                                <div>
                                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl font-bold text-blue-600">2025</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Most Recent</h3>
                                    <p className="text-gray-600 text-sm">Latest certification year</p>
                                </div>
                                <div>
                                    <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl font-bold text-purple-600">{Object.keys( categorizedCerts ).length}</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Categories</h3>
                                    <p className="text-gray-600 text-sm">Specialized domains</p>
                                </div>
                                <div>
                                    <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl font-bold text-green-600">100%</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Current Status</h3>
                                    <p className="text-gray-600 text-sm">All certifications active</p>
                                </div>
                            </div>
                        </div>

                        {/* Continuous Learning */}
                        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continuous Learning</h2>
                            <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
                                I regularly update my skills through professional certifications and training programs. Currently pursuing advanced certifications in emerging AI and data technologies.
                            </p>

                            <div className="bg-white rounded-lg p-6">
                                <h3 className="font-bold text-gray-900 mb-4">Currently Pursuing</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-yellow-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-yellow-900 mb-2">LangChain Expert Certification</h4>
                                        <p className="text-yellow-700 text-sm">Expected: Q2 2026</p>
                                    </div>
                                    <div className="bg-yellow-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-yellow-900 mb-2">Vector Database Specialist</h4>
                                        <p className="text-yellow-700 text-sm">Expected: Q2 2026</p>
                                    </div>
                                    <div className="bg-yellow-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-yellow-900 mb-2">Advanced RAG Implementation</h4>
                                        <p className="text-yellow-700 text-sm">Expected: Q1 2026</p>
                                    </div>
                                </div>
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

export default Certifications;

import React from 'react';
import Footer from '../ui/Footer';
import Navigation from '../ui/Navigation';

const Certifications: React.FC = () =>
{
    const certifications = [
        {
            id: 1,
            name: "Google Cloud Professional Cloud Architect",
            issuer: "Google Cloud",
            date: "2023",
            credentialId: "GCP-PCA-2023-001",
            description: "Advanced cloud architecture and enterprise solutions design",
            category: "Cloud Architecture"
        },
        {
            id: 2,
            name: "Dialogflow CX Advanced Certification",
            issuer: "Google Cloud",
            date: "2023",
            credentialId: "DFCX-ADV-2023-002",
            description: "Expert-level conversational AI development with Dialogflow CX",
            category: "Conversational AI"
        },
        {
            id: 3,
            name: "Kore.ai Platform Certification",
            issuer: "Kore.ai",
            date: "2022",
            credentialId: "KORE-CERT-2022-003",
            description: "Enterprise bot development and deployment on Kore.ai platform",
            category: "Conversational AI"
        },
        {
            id: 4,
            name: "AWS Solutions Architect Associate",
            issuer: "Amazon Web Services",
            date: "2022",
            credentialId: "AWS-SAA-2022-004",
            description: "Cloud solutions architecture and AWS services expertise",
            category: "Cloud Architecture"
        },
        {
            id: 5,
            name: "Apache Spark Developer Certification",
            issuer: "Databricks",
            date: "2021",
            credentialId: "SPARK-DEV-2021-005",
            description: "Big data processing and analytics with Apache Spark",
            category: "Data Engineering"
        },
        {
            id: 6,
            name: "OpenAI GPT Fine-tuning Specialist",
            issuer: "OpenAI",
            date: "2023",
            credentialId: "OPENAI-FT-2023-006",
            description: "Large language model fine-tuning and prompt engineering",
            category: "AI/ML"
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
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Professional certifications demonstrating expertise in conversational AI,
                        cloud architecture, data engineering, and machine learning technologies.
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
                <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
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
                                <span className="text-2xl font-bold text-blue-600">2023</span>
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
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-8 mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continuous Learning</h2>
                    <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
                        I regularly update my skills through professional certifications and training programs.
                        Currently pursuing advanced certifications in emerging AI and data technologies.
                    </p>

                    <div className="bg-white rounded-lg p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Currently Pursuing</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-yellow-900 mb-2">LangChain Expert Certification</h4>
                                <p className="text-yellow-700 text-sm">Expected: Q2 2024</p>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-yellow-900 mb-2">Vector Database Specialist</h4>
                                <p className="text-yellow-700 text-sm">Expected: Q2 2024</p>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-yellow-900 mb-2">Advanced RAG Implementation</h4>
                                <p className="text-yellow-700 text-sm">Expected: Q1 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Certifications;
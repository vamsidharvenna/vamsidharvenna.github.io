import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import Card from '../ui/Card';

const About: React.FC = () =>
{
    const { personalInfo, education } = portfolioConfig;

    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Get to know more about my background, education, and passion for development
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Personal Info */}
                    <div className="space-y-6">
                        <Card>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Information</h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <span className="font-medium text-gray-700 w-20">Name:</span>
                                    <span className="text-gray-600">{personalInfo.name}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-medium text-gray-700 w-20">Location:</span>
                                    <span className="text-gray-600">{personalInfo.location}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-medium text-gray-700 w-20">Email:</span>
                                    <a
                                        href={`mailto:${ personalInfo.email }`}
                                        className="text-primary-600 hover:text-primary-700 transition-colors"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </div>
                                {personalInfo.phone && (
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-700 w-20">Phone:</span>
                                        <span className="text-gray-600">{personalInfo.phone}</span>
                                    </div>
                                )}
                            </div>
                        </Card>

                        <Card>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Do</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {personalInfo.bio}
                            </p>
                        </Card>
                    </div>

                    {/* Education */}
                    <div className="space-y-6">
                        <Card>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
                            <div className="space-y-4">
                                {education.map( ( edu ) => (
                                    <div key={edu.id} className="border-l-4 border-primary-600 pl-4">
                                        <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                                        <p className="text-primary-600 font-medium">{edu.field}</p>
                                        <p className="text-gray-700 font-medium">{edu.institution}</p>
                                        <p className="text-sm text-gray-600">
                                            {edu.startDate} - {edu.endDate}
                                            {edu.gpa && ` • GPA: ${ edu.gpa }`}
                                        </p>
                                        {edu.description && (
                                            <p className="text-gray-600 mt-2">{edu.description}</p>
                                        )}
                                    </div>
                                ) )}
                            </div>
                        </Card>

                        <Card>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fun Facts</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Coffee enthusiast ☕</li>
                                <li>• Love exploring new technologies</li>
                                <li>• Active participant in hackathons</li>
                                <li>• Enjoy contributing to open source projects</li>
                                <li>• Always learning something new</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
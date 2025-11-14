import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import AnimatedChatWidget from '../ui/AnimatedChatWidget';
import Footer from '../ui/Footer';
import Navigation from '../ui/Navigation';

const Resume: React.FC = () =>
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
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {portfolioConfig.personalInfo.name}
                        </h1>
                        <p className="text-lg text-gray-600 mb-4">
                            {portfolioConfig.personalInfo.title}
                        </p>
                        <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
                            <span>{portfolioConfig.personalInfo.location}</span>
                            <span>•</span>
                            <span>{portfolioConfig.personalInfo.email}</span>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Experience Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-teal-200 pb-2">
                                Professional Experience
                            </h2>
                            <div className="space-y-6">
                                {portfolioConfig.experience.map( ( exp ) => (
                                    <div key={exp.id} className="border-l-4 border-teal-200 pl-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                                                <p className="text-lg text-teal-600">{exp.company}</p>
                                            </div>
                                            <div className="text-right text-sm text-gray-500">
                                                <p>{exp.startDate} - {exp.endDate || 'Present'}</p>
                                                <p>{exp.location}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 mb-3">{exp.description}</p>
                                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-3">
                                            {exp.responsibilities.map( ( responsibility, index ) => (
                                                <li key={index}>{responsibility}</li>
                                            ) )}
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map( ( tech ) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-teal-50 text-teal-700 text-xs rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ) )}
                                        </div>
                                    </div>
                                ) )}
                            </div>
                        </div>

                        {/* Education Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-2">
                                Education
                            </h2>
                            <div className="space-y-4">
                                {portfolioConfig.education.map( ( edu ) => (
                                    <div key={edu.id} className="border-l-4 border-blue-200 pl-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                                                <p className="text-blue-600">{edu.institution}</p>
                                                <p className="text-gray-600 text-sm">{edu.field}</p>
                                            </div>
                                            <div className="text-right text-sm text-gray-500">
                                                <p>{edu.startDate} - {edu.endDate}</p>
                                                {edu.gpa && <p>GPA: {edu.gpa}</p>}
                                            </div>
                                        </div>
                                        {edu.description && (
                                            <p className="text-gray-600 text-sm">{edu.description}</p>
                                        )}
                                    </div>
                                ) )}
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-200 pb-2">
                                Technical Skills
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {Object.entries(
                                    portfolioConfig.skills.reduce( ( acc, skill ) =>
                                    {
                                        if ( !acc[ skill.category ] ) acc[ skill.category ] = [];
                                        acc[ skill.category ].push( skill );
                                        return acc;
                                    }, {} as Record<string, typeof portfolioConfig.skills> )
                                ).map( ( [ category, skills ] ) => (
                                    <div key={category} className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-800 mb-3">{category}</h3>
                                        <div className="space-y-2">
                                            {skills.map( ( skill ) => (
                                                <div key={skill.name} className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-700">{skill.name}</span>
                                                </div>
                                            ) )}
                                        </div>
                                    </div>
                                ) )}
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

export default Resume;

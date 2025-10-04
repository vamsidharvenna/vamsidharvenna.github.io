import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import Card from '../ui/Card';

const Skills: React.FC = () =>
{
    const { skills } = portfolioConfig;

    // Group skills by category
    const skillsByCategory = skills.reduce( ( acc, skill ) =>
    {
        if ( !acc[ skill.category ] )
        {
            acc[ skill.category ] = [];
        }
        acc[ skill.category ].push( skill );
        return acc;
    }, {} as Record<string, typeof skills> );

    const getSkillColor = ( level: number ) =>
    {
        if ( level >= 90 ) return 'bg-green-500';
        if ( level >= 75 ) return 'bg-blue-500';
        if ( level >= 60 ) return 'bg-yellow-500';
        return 'bg-gray-500';
    };

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">
                        Here are the technologies and tools I work with on a regular basis
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {Object.entries( skillsByCategory ).map( ( [ category, categorySkills ] ) => (
                        <Card key={category} className="h-full">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center border-b border-gray-200 pb-2">
                                {category}
                            </h3>
                            <div className="space-y-4">
                                {categorySkills.map( ( skill ) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                                            <span className="text-xs text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full transition-all duration-500 ${ getSkillColor( skill.level ) }`}
                                                style={{ width: `${ skill.level }%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ) )}
                            </div>
                        </Card>
                    ) )}
                </div>

                {/* Skills Summary */}
                <div className="mt-16">
                    <Card className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Skills Overview</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                                <div className="text-gray-700">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">{skills.length}</div>
                                <div className="text-gray-700">Technologies</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">
                                    {Object.keys( skillsByCategory ).length}
                                </div>
                                <div className="text-gray-700">Categories</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">
                                    {skills.filter( skill => skill.level >= 90 ).length}
                                </div>
                                <div className="text-gray-700">Expert Level</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Skills;
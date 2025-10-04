import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import Card from '../ui/Card';

const Experience: React.FC = () =>
{
    const { experience } = portfolioConfig;

    const formatDate = ( dateString: string ) =>
    {
        const date = new Date( dateString );
        return date.toLocaleDateString( 'en-US', {
            year: 'numeric',
            month: 'short'
        } );
    };

    const calculateDuration = ( startDate: string, endDate: string | null ) =>
    {
        const start = new Date( startDate );
        const end = endDate ? new Date( endDate ) : new Date();

        const months = ( end.getFullYear() - start.getFullYear() ) * 12 + ( end.getMonth() - start.getMonth() );
        const years = Math.floor( months / 12 );
        const remainingMonths = months % 12;

        if ( years === 0 )
        {
            return `${ remainingMonths } month${ remainingMonths !== 1 ? 's' : '' }`;
        } else if ( remainingMonths === 0 )
        {
            return `${ years } year${ years !== 1 ? 's' : '' }`;
        } else
        {
            return `${ years } year${ years !== 1 ? 's' : '' }, ${ remainingMonths } month${ remainingMonths !== 1 ? 's' : '' }`;
        }
    };

    return (
        <section id="experience" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">
                        My professional journey and the roles that have shaped my career
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary-200"></div>

                        {experience.map( ( exp, index ) => (
                            <div key={exp.id} className="relative mb-12 last:mb-0">
                                {/* Timeline dot */}
                                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>

                                {/* Content */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${ index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8' }`}>
                                    <Card className={`${ index % 2 === 0 ? 'md:text-right' : '' }`}>
                                        {/* Date Badge */}
                                        <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                                            {formatDate( exp.startDate )} - {exp.endDate ? formatDate( exp.endDate ) : 'Present'}
                                            <span className="block text-xs text-primary-600 mt-1">
                                                {calculateDuration( exp.startDate, exp.endDate )}
                                            </span>
                                        </div>

                                        {/* Job Info */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                                        <h4 className="text-lg font-semibold text-primary-600 mb-2">{exp.company}</h4>
                                        <p className="text-sm text-gray-600 mb-4">{exp.location}</p>
                                        <p className="text-gray-700 mb-6">{exp.description}</p>

                                        {/* Responsibilities */}
                                        <div className="mb-6">
                                            <h5 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h5>
                                            <ul className={`space-y-2 text-sm text-gray-700 ${ index % 2 === 0 ? 'md:text-right' : '' }`}>
                                                {exp.responsibilities.map( ( responsibility, idx ) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className={`w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0 ${ index % 2 === 0 ? 'md:order-2 md:ml-3 md:mr-0' : '' }`}></span>
                                                        <span className="flex-1">{responsibility}</span>
                                                    </li>
                                                ) )}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                                            <div className={`flex flex-wrap gap-2 ${ index % 2 === 0 ? 'md:justify-end' : '' }`}>
                                                {exp.technologies.map( ( tech ) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                                                    >
                                                        {tech}
                                                    </span>
                                                ) )}
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        ) )}
                    </div>
                </div>

                {/* Experience Summary */}
                <div className="mt-16">
                    <Card className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Overview</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                                <div className="text-gray-700">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">{experience.length}</div>
                                <div className="text-gray-700">Companies</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">
                                    {[ ...new Set( experience.flatMap( exp => exp.technologies ) ) ].length}
                                </div>
                                <div className="text-gray-700">Technologies</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                                <div className="text-gray-700">Projects Delivered</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Experience;
import React, { useState } from 'react';
import { portfolioConfig } from '../../config/portfolio';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Icon from '../ui/Icon';

const Projects: React.FC = () =>
{
    const { projects } = portfolioConfig;
    const [ showAll, setShowAll ] = useState( false );

    const displayedProjects = showAll ? projects : projects.filter( project => project.featured );

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">
                        A collection of projects I've worked on, showcasing different technologies and solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map( ( project ) => (
                        <Card key={project.id} className="h-full flex flex-col">
                            {/* Project Image */}
                            <div className="mb-6 overflow-hidden rounded-lg">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Project Content */}
                            <div className="flex-1 flex flex-col">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map( ( tech ) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ) )}
                                        </div>
                                    </div>
                                </div>

                                {/* Project Links */}
                                <div className="flex gap-3">
                                    {project.demoUrl && (
                                        <Button
                                            variant="primary"
                                            size="sm"
                                            className="flex items-center gap-2 flex-1"
                                            onClick={() => window.open( project.demoUrl, '_blank' )}
                                        >
                                            <Icon name="external-link" size={16} />
                                            Live Demo
                                        </Button>
                                    )}
                                    {project.githubUrl && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex items-center gap-2 flex-1"
                                            onClick={() => window.open( project.githubUrl, '_blank' )}
                                        >
                                            <Icon name="github" size={16} />
                                            Code
                                        </Button>
                                    )}
                                </div>
                            </div>

                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Featured
                                </div>
                            )}
                        </Card>
                    ) )}
                </div>

                {/* Show More/Less Button */}
                {projects.length > projects.filter( p => p.featured ).length && (
                    <div className="text-center mt-12">
                        <Button
                            variant="outline"
                            onClick={() => setShowAll( !showAll )}
                            className="min-w-48"
                        >
                            {showAll ? 'Show Featured Only' : 'Show All Projects'}
                        </Button>
                    </div>
                )}

                {/* Projects Stats */}
                <div className="mt-16">
                    <Card className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Statistics</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">{projects.length}</div>
                                <div className="text-gray-700">Total Projects</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">
                                    {projects.filter( p => p.featured ).length}
                                </div>
                                <div className="text-gray-700">Featured</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">
                                    {projects.filter( p => p.demoUrl ).length}
                                </div>
                                <div className="text-gray-700">Live Demos</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">
                                    {[ ...new Set( projects.flatMap( p => p.technologies ) ) ].length}
                                </div>
                                <div className="text-gray-700">Technologies Used</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Projects;
import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

const Hero: React.FC = () =>
{
    const { personalInfo, socialLinks } = portfolioConfig;

    return (
        <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8 animate-fade-in">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                                Hi, I'm{' '}
                                <span className="text-primary-600">{personalInfo.name}</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                                {personalInfo.title}
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                                {personalInfo.bio}
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={() => document.getElementById( 'projects' )?.scrollIntoView( { behavior: 'smooth' } )}
                                size="lg"
                            >
                                View My Work
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => document.getElementById( 'contact' )?.scrollIntoView( { behavior: 'smooth' } )}
                            >
                                Get In Touch
                            </Button>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-6">
                            {socialLinks.map( ( link ) => (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-primary-600 transition-colors"
                                    aria-label={link.platform}
                                >
                                    <Icon name={link.icon} size={24} />
                                </a>
                            ) )}
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="flex justify-center lg:justify-end animate-slide-up">
                        <div className="relative">
                            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src={personalInfo.avatar}
                                    alt={personalInfo.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-100 rounded-full opacity-60"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-200 rounded-full opacity-40"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
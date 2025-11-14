import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import Icon from '../ui/Icon';

const Footer: React.FC = () =>
{
    const { personalInfo, socialLinks, navigation } = portfolioConfig;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
                        <p className="text-gray-400 mb-4">
                            {personalInfo.title} passionate about creating innovative solutions
                            and building exceptional digital experiences.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label={link.platform}
                                >
                                    <Icon name={link.icon} size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {navigation.map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                        <div className="space-y-2 text-gray-400">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="block hover:text-white transition-colors"
                            >
                                {personalInfo.email}
                            </a>
                            {personalInfo.phone && (
                                <span className="block">{personalInfo.phone}</span>
                            )}
                            <span className="block">{personalInfo.location}</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                        <p>© {currentYear} Vamsidhar Reddy Venna. All rights reserved.</p>
                        <p className="mt-2 md:mt-0">
                            Designed &amp; built with React, TypeScript, Tailwind CSS, and a lot of coffee ☕.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

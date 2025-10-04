import React from 'react';
import { portfolioConfig } from '../../config/portfolio';

const Footer: React.FC = () =>
{
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <p className="text-gray-600 text-sm">
                            © {currentYear} {portfolioConfig.personalInfo.name}. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            Built with React, TypeScript, and Tailwind CSS
                        </p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <span className="text-gray-500 text-xs">
                            {portfolioConfig.personalInfo.location}
                        </span>
                        <span className="text-gray-400">•</span>
                        <a
                            href={`mailto:${ portfolioConfig.personalInfo.email }`}
                            className="text-gray-500 hover:text-teal-600 text-xs transition-colors"
                        >
                            {portfolioConfig.personalInfo.email}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
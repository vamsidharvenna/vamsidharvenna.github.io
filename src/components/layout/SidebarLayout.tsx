import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import Footer from '../ui/Footer';
import Icon from '../ui/Icon';
import Navigation from '../ui/Navigation';

interface SidebarLayoutProps
{
    children: React.ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ( { children } ) =>
{
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Fixed Left Sidebar - Connect */}
            <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-gray-200 z-40">
                <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-6">Connect</h2>
                    <div className="space-y-4">
                        {portfolioConfig.socialLinks.map( ( link ) => (
                            <a
                                key={link.platform}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 transition-colors"
                            >
                                <Icon name={link.icon} className="w-5 h-5" />
                                <span>{link.platform}</span>
                            </a>
                        ) )}
                        <div className="flex items-center space-x-3 text-gray-600">
                            <Icon name="map-pin" className="w-5 h-5" />
                            <span>{portfolioConfig.personalInfo.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 ml-64 flex flex-col">
                <Navigation />

                {/* Page Content */}
                <main className="flex-1">
                    {children}
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default SidebarLayout;
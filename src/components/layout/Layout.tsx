import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { portfolioConfig } from '../../config/portfolio';
import Icon from '../ui/Icon';

const Layout: React.FC = () =>
{
    const location = useLocation();

    const getNavClass = ( path: string ) =>
    {
        const currentPath = location.pathname === '/' ? '' : location.pathname.slice( 1 );
        const isActive = currentPath === path.toLowerCase() || ( path === '' && currentPath === '' );

        return `font-medium transition-colors ${ isActive
            ? 'text-teal-700 border-b-2 border-teal-600'
            : 'text-teal-600 hover:text-teal-700'
            }`;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header with Navigation */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold text-gray-900">Home</h1>
                        </div>
                        <nav className="flex space-x-8">
                            {portfolioConfig.navigation.map( ( item ) => (
                                <Link
                                    key={item}
                                    to={`/${ item.toLowerCase() }`}
                                    className={getNavClass( item.toLowerCase() )}
                                >
                                    {item}
                                </Link>
                            ) )}
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main 3-Column Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Connect */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6">
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
                                    <span>Location</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column - Main Content */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="text-center mb-6">
                                <div className="w-32 h-32 mx-auto mb-4">
                                    <img
                                        src={portfolioConfig.personalInfo.avatar}
                                        alt={portfolioConfig.personalInfo.name}
                                        className="w-full h-full rounded-full object-cover border-4 border-gray-200"
                                    />
                                </div>
                                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                    {portfolioConfig.personalInfo.name}
                                </h1>
                                <p className="text-gray-600 mb-4">
                                    {portfolioConfig.personalInfo.title}
                                </p>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {portfolioConfig.personalInfo.bio}
                                </p>
                            </div>

                            {/* Dynamic Content Area */}
                            <div className="mt-6">
                                <Outlet />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Vamsidhar Bot */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Vamsidhar Bot</h2>
                            <p className="text-gray-500 text-sm italic">coming soon</p>
                            {/* Future chatbot interface will go here */}
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-600">
                                    Interactive AI assistant coming soon! This will be a conversational interface
                                    where you can ask questions about my experience, projects, and expertise in
                                    Conversational AI and Data Engineering.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
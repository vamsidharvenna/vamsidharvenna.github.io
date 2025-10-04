import React, { useState } from 'react';
import { portfolioConfig } from '../../config/portfolio';
import Icon from '../ui/Icon';

const Header: React.FC = () =>
{
    const [ isMenuOpen, setIsMenuOpen ] = useState( false );

    const scrollToSection = ( sectionId: string ) =>
    {
        const element = document.getElementById( sectionId.toLowerCase() );
        if ( element )
        {
            element.scrollIntoView( { behavior: 'smooth' } );
            setIsMenuOpen( false );
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
            <nav className="container-custom">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => scrollToSection( 'hero' )}
                            className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors"
                        >
                            {portfolioConfig.personalInfo.name.split( ' ' ).map( name => name[ 0 ] ).join( '' )}
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {portfolioConfig.navigation.map( ( item ) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection( item.toLowerCase() )}
                                    className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                                >
                                    {item}
                                </button>
                            ) )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen( !isMenuOpen )}
                            className="text-gray-700 hover:text-primary-600 p-2"
                        >
                            <Icon name={isMenuOpen ? 'close' : 'menu'} size={24} />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                            {portfolioConfig.navigation.map( ( item ) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection( item.toLowerCase() )}
                                    className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
                                >
                                    {item}
                                </button>
                            ) )}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
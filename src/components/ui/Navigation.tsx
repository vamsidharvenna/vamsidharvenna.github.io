import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { portfolioConfig } from '../../config/portfolio';

const Navigation: React.FC = () =>
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
        <header className="bg-white shadow-sm border-b">
            <div className="flex justify-between items-center py-4 w-full">
                <div className="flex items-center pl-8">
                    <Link to="/" className="text-xl font-bold text-gray-900 hover:text-teal-600 transition-colors">
                        Home
                    </Link>
                </div>
                <div className="flex items-center pr-4">
                    <nav className="flex space-x-8">
                        {portfolioConfig.navigation.map( ( item ) => (
                            <Link
                                key={item}
                                to={item.toLowerCase() === 'resume' ? '/resume' : `/${ item.toLowerCase() }`}
                                className={getNavClass( item.toLowerCase() )}
                            >
                                {item}
                            </Link>
                        ) )}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navigation;
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

        return `relative font-semibold uppercase tracking-wide transition-all duration-200 text-sm ${ isActive
            ? 'text-cyan-400 drop-shadow-[0_4px_10px_rgba(34,211,238,0.6)] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r from-cyan-400 to-teal-500'
            : 'text-slate-500 hover:text-cyan-400 hover:drop-shadow-[0_8px_20px_rgba(34,211,238,0.45)]'
            }`;
    };

    return (
        <header className="bg-white/95 backdrop-blur border-b border-slate-100 shadow-[0_8px_30px_rgba(15,35,56,0.06)]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between py-4 px-4 sm:px-8">
                <Link to="/" className="text-xl font-bold text-gray-900 hover:text-cyan-500 transition-colors">
                    Home
                </Link>
                <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-start sm:justify-end">
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
        </header>
    );
};

export default Navigation;

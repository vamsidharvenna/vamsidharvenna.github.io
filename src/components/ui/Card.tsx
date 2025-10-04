import React from 'react';

interface CardProps
{
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    padding?: 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ( {
    children,
    className = '',
    hover = true,
    padding = 'md'
} ) =>
{
    const paddingClasses = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
    };

    const hoverClass = hover ? 'hover:shadow-xl transition-shadow duration-300' : '';

    return (
        <div className={`bg-white rounded-xl shadow-lg ${ hoverClass } ${ paddingClasses[ padding ] } ${ className }`}>
            {children}
        </div>
    );
};

export default Card;
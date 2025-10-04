import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>
{
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ( {
    variant = 'primary',
    size = 'md',
    children,
    fullWidth = false,
    className = '',
    ...props
} ) =>
{
    const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
        primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
        secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
        outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500'
    };

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`${ baseClasses } ${ variantClasses[ variant ] } ${ sizeClasses[ size ] } ${ widthClass } ${ className }`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
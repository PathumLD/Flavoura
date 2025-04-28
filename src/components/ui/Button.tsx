import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

interface LinkButtonProps extends Omit<ButtonProps, 'type'> {
  to: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  fullWidth = false,
  type = 'button',
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-accent-600 hover:bg-accent-700 text-white focus:ring-accent-600',
    secondary: 'bg-secondary-800 hover:bg-secondary-900 text-white focus:ring-secondary-800',
    outline: 'border border-secondary-300 hover:bg-secondary-50 text-secondary-800 focus:ring-secondary-300',
    text: 'text-secondary-800 hover:text-accent-600 hover:bg-transparent focus:ring-transparent',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-2.5',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyle,
        disabledStyle,
        className
      )}
    >
      {children}
    </button>
  );
};

export const LinkButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  disabled = false,
  fullWidth = false,
}: LinkButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-accent-600 hover:bg-accent-700 text-white focus:ring-accent-600',
    secondary: 'bg-secondary-800 hover:bg-secondary-900 text-white focus:ring-secondary-800',
    outline: 'border border-secondary-300 hover:bg-secondary-50 text-secondary-800 focus:ring-secondary-300',
    text: 'text-secondary-800 hover:text-accent-600 hover:bg-transparent focus:ring-transparent',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-2.5',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 pointer-events-none' : '';
  
  return (
    <Link
      to={to}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyle,
        disabledStyle,
        className
      )}
    >
      {children}
    </Link>
  );
};
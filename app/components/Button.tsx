import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'lg',
  children,
  icon,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide transition-all rounded-md disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-[#51FF48] text-black hover:opacity-90',
    secondary: 'bg-[#141414] text-[#51FF48] hover:bg-[#1a1a1a]',
    outline: 'bg-transparent border border-white/30 text-white hover:border-white/50',
    ghost: 'bg-[#CAE7EA] text-black hover:bg-[#b8d5d8]',
  };
  
  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-12 px-6 text-sm',
    md: 'h-12 px-8 text-base',
    lg: 'h-[60px] px-8 text-lg md:text-xl',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="inline-flex">{icon}</span>}
    </button>
  );
}

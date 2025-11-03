import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  link?: string;
}

export default function Button({
  variant = "primary",
  size = "lg",
  children,
  icon,
  fullWidth = false,
  className = "",
  link,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide transition-all rounded-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer duration-300";

  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-primary text-dark hover:opacity-90 hover:bg-light",
    secondary: "bg-[#141414] text-[#51FF48] hover:bg-[#1a1a1a]",
    outline:
      "bg-transparent border border-white/30 text-white hover:border-light hover:bg-light hover:text-dark",
    ghost: "bg-light text-black hover:bg-primary",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "h-12 px-4 text-base",
    lg: "h-12 md:h-[60px] px-4 md:px-8 text-base md:text-xl",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  if (link)
    return (
      <Link
        href={link}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
      >
        {children}
        {icon && <span className="inline-flex">{icon}</span>}
      </Link>
    );

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

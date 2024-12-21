import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`mt-6 bg-brand-1 text-bg-1 py-2 px-6 rounded-full font-semibold transition-transform transform hover:scale-105 flex items-center gap-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;

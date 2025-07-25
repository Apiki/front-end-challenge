import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = 'primary',
  className = '',
}) => {
  return (
    <button
      className={`button button--${variant} ${loading ? 'button--loading' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && <span className="button__spinner" />}
      <span className="button__text">{children}</span>
    </button>
  );
}; 
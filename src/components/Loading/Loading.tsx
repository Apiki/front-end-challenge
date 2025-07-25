import React from 'react';
import './Loading.css';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

export const Loading: React.FC<LoadingProps> = ({ 
  size = 'medium', 
  text = 'Loading...' 
}) => {
  return (
    <div className={`loading loading--${size}`}>
      <div className="loading__spinner" />
      {text && <p className="loading__text">{text}</p>}
    </div>
  );
}; 
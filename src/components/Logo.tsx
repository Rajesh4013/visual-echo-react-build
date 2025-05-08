
import React from 'react';

interface LogoProps {
  type: 'main' | 'lblock';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ type, className = "" }) => {
  const mainLogoSrc = "/lovable-uploads/51c57eae-b155-4c70-aa0b-dd4072cfe4a3.png";
  const lBlockLogoSrc = "/lovable-uploads/51c57eae-b155-4c70-aa0b-dd4072cfe4a3.png";
  
  return (
    <img 
      src={type === 'main' ? mainLogoSrc : lBlockLogoSrc}
      alt={type === 'main' ? "Sree Vismayee Logo" : "L Blocks Logo"}
      className={className}
    />
  );
};

export default Logo;

import React from 'react';

const TechnicalStar: React.FC<{ size?: number; color?: string }> = ({ size = 100, color = 'white' }) => {
  return (
    <div className="spinning-star" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L55 45L100 50L55 55L50 100L45 55L0 50L45 45L50 0Z" fill={color} />
        <circle cx="50" cy="50" r="5" fill="black" />
      </svg>
    </div>
  );
};

export default TechnicalStar;

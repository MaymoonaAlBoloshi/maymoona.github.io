import React from 'react';
import './about.css';

interface AboutSectionProps {
  imageUrl: string;
  heading: string;
  description: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ imageUrl, heading, description }) => {
  return (
    <div className="about">
      <div className="image-container">
        <img className="image" src={imageUrl} alt="About" />
      </div>
      <div className="content">
        <h2 className="heading">{heading}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};



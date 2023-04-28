import React from 'react';
import './testimonial.css';

interface Testimonial {
  text: string;
  author: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
          <p className="testimonial-author">{testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsSection;


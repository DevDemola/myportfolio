import { useState } from "react";
import "./Testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      text: "Demola UNDERSTOOD the assignment. The communication flow was amazing too, such a collaborative experience. MY BRANDING IS ME NOW!! I've had such lovely comments already – what a DREAM!",
      name: "Real Desmond",
      title: "BRAND DESIGNER",
    },
    {
      text: "I struggle to see past the moodboard, like what else could anyone possibly design but, look at my website!! It's everything I wanted and everything I didn't know I needed. I can't wait to slap it across everything I do.",
      name: "Bamigbade Esther",
      title: "COMPOSITOR",
    },
    {
      text: "He has his onboarding process and structure totally nailed. He kept me informed at every stage and made clear what she needed from me and vice-versa. A result that I am absolutely in love with!",
      name: "Adebayo Okelawal",
      title: "BUSINESS OWNER",
    },
  ];

  return (
    <div className="testimonials">
      <div className="testimonials-header">
        <div className="testimonials-label">TESTIMONIALS</div>
        <h2>
          From The <span>Brands</span>
        </h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-icon">"</div>
            <div className="testimonial-text">{testimonial.text}</div>
            <div className="client-info">
              <div className="client-name">{testimonial.name}</div>
              <div className="client-title">{testimonial.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

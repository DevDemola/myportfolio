import React from "react";
import "./About.css";
import { BiArrowBack } from "react-icons/bi";
// import profileImg from "./profile.jpg"; // replace with your image
import { useEffect } from 'react';
const About = () => {
  

// Add this useEffect to your component
useEffect(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  revealElements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);
  return (
    <>
    <section className="about">
      <div className="about-container">
        
        {/* Image */}
        <div className="about-image">
          <img src="/me.png" alt="Tosin" />
        </div>

        {/* Text */}
        <div className="about-content">
          <h2>Hi! I’m Demola.</h2>

          <p>
            I’m a website designer and developer, but I do things differently.
            I hate jargon, I hate complicated technical words, and I offer a
            range of services to cater for brands at all stages of their journey.
          </p>

          <p>
            I work with ambitious brands & businesses on their website materials.
            What makes me unique is my strong visual aesthetic — I have a good eye
            for design and I know how to make things look fun, stylish, and still
            help you get more customers.
          </p>

          <p>
            My process is simple: we work together to figure out exactly what your
            business needs before I bring it to life. Everything I do is collaborative,
            supportive, and creative.
          </p>

          <a href="/projects" className="about-btn">
            SEE WHAT I’VE CREATED <BiArrowBack/>
          </a>
        </div>

      </div>
    </section>
     <section className="work  reveal-on-scroll">
      <div className="work-container">

        {/* LEFT CARD */}
        <div className="card">
          <h3>Let’s work together if…</h3>

          <ul className="list good">
            <li>You want a website that keeps visitors engaged – and nudges them into buying from you.</li>
            <li>You want a simple, sleek and efficient design and development process.</li>
            <li>You’d like to partner with someone who cares as much about your business as you do.</li>
            <li>You like what I do and want some of that for yourself!!</li>
          </ul>

          <button className="primary-btn">LET’S DO THIS!</button>
        </div>

        {/* RIGHT CARD */}
        <div className="card">
          <h3>We’re not the best fit if…</h3>

          <ul className="list bad">
            <li>You only care about your website being pretty, not how user-friendly it is.</li>
            <li>You like to micromanage every part of the process.</li>
            <li>You care only about how much it costs.</li>
            <li>You want someone to just follow orders instead of collaborating.</li>
          </ul>

          <button className="secondary-btn">HMM, MAYBE NOT?</button>
        </div>

      </div>
    </section>
    </>
  );
};

export default About;
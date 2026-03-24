import React, { useEffect } from "react";
import "./Hero.css";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiPenTool,
  FiSend,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Testimonial from "./Testimonial";

const Hero = () => {

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

    // Observe all elements with 'reveal-on-scroll' class
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>
              I Design & Build <br />
              <span>Impactful Websites</span>
            </h1>

            <p>
              Hi! I’m Demola, a website designer, frontend dev, and all-around
              website obsessed human. Nothing makes me happier than making the
              process of getting a new website stress-free for you.
            </p>

            <div className="hero-buttons">
              <button className="btn primary">
                Let’s Create Your Site <FiArrowRight />
              </button>

              <button className="btn outline">
                Take Me to Portfolio <FiArrowRight />
              </button>
            </div>

            <div className="brands">
              <p>Proudly worked with these brands:</p>
            </div>
            <div className="logos">
              <img src="/onus.jpeg" alt="onus" />
              <img src="/flatterz.png" alt="flatterz" />
              <img src="/curve.png" alt="curve" />
            </div>
          </div>

          <div className="hero-image">
            <img src="/me.png" alt="Hero" />
          </div>
        </div>

        <a href="#" className="whatsapp" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </section>
      
      <section className="who reveal-on-scroll">
        <div className="container">
          {/* Header */}
          <div className="who-header reveal-on-scroll">
            <span className="badge">WHO I WORK WITH</span>
            <h2>This Is For You If...</h2>
          </div>

          {/* Grid */}
          <div className="who-grid">
            {/* Left Card */}
            <div className="left">
              <div className="card green reveal-on-scroll">
                <div className="icon-box">
                  <FiPenTool />
                </div>

                <h3>Creators</h3>

                <p>
                  You’ve spent HOURS trying to build a website yourself, but it
                  still doesn’t look good enough to showcase your work.
                </p>

                <button className="card-btn">
                  Let’s Fix That <FiArrowUpRight />
                </button>
              </div>
              <div className="card green reveal-on-scroll">
                <div className="icon-box">
                  <FiPenTool />
                </div>

                <h3>E-commerce Store</h3>

                <p>
                  You want a website that’s designed to handle selling products,
                  so you can manage orders and deliveries without wasting time.
                </p>

                <button className="card-btn">
                  Let’s Upgrade it <FiArrowUpRight />
                </button>
              </div>
            </div>
            {/* Middle Image */}
            <div className="card image-card reveal-on-scroll">
              <img src="/me (2).png" alt="client" />
            </div>

            {/* Right Card */}
            <div className="right">
              <div className="card blue reveal-on-scroll">
                <div className="icon-box">
                  <FiSend />
                </div>

                <h3>Personal Brand</h3>

                <p>
                  You’ve tried a few website templates, but none of them are
                  doing justice to your brand, you need something that feels
                  more you.
                </p>

                <button className="card-btn">
                  Let’s Launch It <FiArrowUpRight />
                </button>
              </div>
              <div className="card blue reveal-on-scroll">
                <div className="icon-box">
                  <FiSend />
                </div>

                <h3>Service Provider</h3>

                <p>
                  You want to show your dream clients exactly how great you are
                  and how you’re the best service provider for them
                </p>

                <button className="card-btn">
                  Let’s Build It <FiArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="brands-section reveal-on-scroll">
        <div className="brands-label">I'VE WORKED WITH</div>
        <div className="brands-title">
          Happy <span>Brands.</span>
        </div>
        <div className="brands-grid">
          <div className="brand-logo reveal-on-scroll">
            <img src="/flatterz.png" alt="OLHMS MEDIA" className="fl" />
          </div>
          <div className="brand-logo reveal-on-scroll">
            <img src="/splitalogo.png" alt="MAP" />
          </div>
          <div className="brand-logo reveal-on-scroll">
            <img src="/onus.jpeg" alt="clique" />
          </div>
          <div className="brand-logo reveal-on-scroll">
            <img src="/Orange_logo.avif" alt="SHOPPA" />
          </div>
          <div className="brand-logo reveal-on-scroll">
            <img src="/sdn.webp" alt="Rekora" />
          </div>
          <div className="brand-logo reveal-on-scroll">
            <img src="/uplam (2).png" alt="tixavo" />
          </div>
        </div>
      </div>
      
      <div className="reveal-on-scroll">
        <Testimonial />
      </div>
    </>
  );
};

export default Hero;
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could integrate email sending or API call
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-intro">
          I’m always open to discussing new projects, collaborations, or just
          saying hi. Let’s connect!
        </p>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h4>Email</h4>
              <p>omiyejuwonademola@gmail.com.com</p>
            </div>
            <div className="info-card">
              <FaPhone className="info-icon" />
              <h4>Phone</h4>
              <p>+234 815 841 1808</p>
            </div>
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h4>Location</h4>
              <p>Lagos, Nigeria</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
              {submitted && (
                <p className="submit-success">
                  Message sent! I’ll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

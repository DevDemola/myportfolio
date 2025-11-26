import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success toast
    toast.success("Message sent successfully!");

    // Clear form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Contact Me</h2>
          <p>Got a project, internship, or opportunity? I’d love to hear from you.</p>

          <div className="contact-info">
            <p><strong>Email:</strong> omiyejuwonademola@gmail.com</p>
            <p><strong>Location:</strong> Lagos, Nigeria</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default Contact;

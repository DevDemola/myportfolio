import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [selectedOption, setSelectedOption] = useState("Need a Website");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState("");

  const options = [
    "Need a Website",
    "Consult me",
    // "Invite me to speak",
    "Add me to a project",
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setApiError("");

    try {
      // simulate API call
      await new Promise((res) => setTimeout(res, 1500));

      console.log({ ...formData, service: selectedOption });

      setSuccess(true);
      setFormData({ email: "", firstName: "", lastName: "", phone: "" });
    } catch (err) {
      setApiError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-image">
          <img src="/me.png" alt="profile" />
        </div>

        <div className="contact-form">
          <h4 className="welcome">👋 Hi, Welcome...</h4>
          <h2>What do you need?</h2>
          <p>Please select one option:</p>

          <div className="options">
            {options.map((opt) => (
              <button
                key={opt}
                className={selectedOption === opt ? "active" : ""}
                onClick={() => setSelectedOption(opt)}
                type="button"
              >
                {opt}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="input-group">
              <label>First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>

            <div className="input-group">
              <label>Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>

            <div className="input-group">
              <label>Phone Number *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="input-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="4"
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>

            <button className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Submit →"}
            </button>

            {success && <p className="success">Message sent 🚀</p>}
            {apiError && <p className="error">{apiError}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

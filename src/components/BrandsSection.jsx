import React from "react";
import "./BrandsSection.css";
import { 
  FiFilm, 
  FiShare2, 
  FiPrinter, 
  FiGlobe, 
  FiMessageCircle, 
  FiShoppingBag,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiArrowRight,
  FiPlay,
  FiStar,
  FiZap
} from "react-icons/fi";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdBrandingWatermark, MdWeb, MdSocialDistance } from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";

const BrandsSection = () => {
  const brands = [
    {
      name: "Olhms Media",
      services: ["BRANDING", "SOCIAL MEDIA", "PRINT"],
      icon: <FiFilm size={32} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      delay: 0.1,
      stats: "150+ Campaigns"
    },
    {
      name: "Fostacomms",
      services: ["BRANDING", "WEBSITE", "SOCIAL"],
      icon: <FiShare2 size={32} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      delay: 0.2,
      stats: "45+ Clients"
    },
    {
      name: "Rekora",
      services: ["BRANDING", "WEBSITE"],
      icon: <FiGlobe size={32} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      delay: 0.3,
      stats: "30+ Projects"
    }
  ];

  const stats = [
    { number: "50+", label: "Brands Empowered", icon: <FiUsers size={24} /> },
    { number: "100M+", label: "Views Generated", icon: <FiPlay size={24} /> },
    { number: "15+", label: "Countries Reached", icon: <FiGlobe size={24} /> },
    { number: "98%", label: "Client Satisfaction", icon: <FiStar size={24} /> }
  ];

  return (
    <section className="brands-services-section">
      <div className="brands-services-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-badge">
            <FiStar className="badge-icon" /> TRUSTED PARTNERS <FiStar className="badge-icon" />
          </span>
          <h2 className="section-title">
            The PR Team Behind <span className="highlight">Trusted Brands</span>
          </h2>
          <p className="section-subtitle">
            <HiOutlineLightningBolt className="subtitle-icon" />
            Empowering STEM Enthusiasts in Africa
            <HiOutlineLightningBolt className="subtitle-icon" />
          </p>
        </div>

        {/* Hero Tagline */}
        <div className="hero-tagline">
          <div className="tagline-wrapper">
            <FiTrendingUp className="trend-icon" />
            <h1 className="tagline-title">
              We Make <span className="viral-text">Viral Videos</span>
            </h1>
            <div className="social-icons">
              <FaYoutube className="social-icon youtube" />
              <FaInstagram className="social-icon instagram" />
              <FaTiktok className="social-icon tiktok" />
            </div>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="brand-card"
            >
              <div className="brand-card-inner">
                <div className="brand-icon">
                  <div className="icon-circle" style={{ background: brand.gradient }}>
                    {brand.icon}
                  </div>
                </div>
                
                <h3 className="brand-name">{brand.name}</h3>
                
                <div className="services-list">
                  {brand.services.map((service, idx) => (
                    <span key={idx} className="service-tag">
                      {service === "BRANDING" && <MdBrandingWatermark size={12} />}
                      {service === "SOCIAL MEDIA" && <FiMessageCircle size={12} />}
                      {service === "SOCIAL" && <MdSocialDistance size={12} />}
                      {service === "WEBSITE" && <MdWeb size={12} />}
                      {service === "PRINT" && <FiPrinter size={12} />}
                      {service}
                    </span>
                  ))}
                </div>
                
                <div className="brand-stats">
                  <FiAward className="stats-icon" />
                  <span>{brand.stats}</span>
                </div>
                
                <div className="brand-hover-effect">
                  <span className="learn-more">
                    View Work <FiArrowRight className="arrow-icon" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="cta-wrapper">
          <button className="brands-cta-btn">
            Partner With Us <FiArrowRight className="btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
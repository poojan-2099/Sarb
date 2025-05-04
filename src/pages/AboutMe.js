import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import AnimatedButton from "../components/AnimatedButton";
import { Link } from 'react-router-dom';

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>About Sarbjit Sogy | LA, SFV, Ventura, Bakersfield Real Estate</title>
        <meta
          name="description"
          content="Meet Sarbjit Sogy, a passionate real estate professional serving Los Angeles, San Fernando Valley, Ventura County, and Bakersfield. Backed by local expertise and energy to help you succeed in buying or selling."
        />
        <meta
          name="keywords"
          content="Sarbjit Sogy, real estate agent Los Angeles, SFV homes, Ventura property, Bakersfield real estate, first-time home buyer, SarbReal, CA DRE 02070444"
        />
      </Helmet>

      <div className="page about">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="about-content"
        >
          <motion.h1 variants={itemVariants} className="section-title">
            Meet Your Local Real Estate Expert
          </motion.h1>

          <motion.div variants={itemVariants} className="profile-section">
            <div className="profile-image-container">
              <img 
                src="/sb_about.jpg" 
                alt="Sarbjit Sogy Real Estate Agent" 
                className="profile-image"
              />
            </div>
            <div className="profile-text">
              <p className="lead-text">
                I'm <strong>Sarbjit Sogy</strong>, a newly registered California real estate agent (DRE #02070444) with a deep understanding of the Los Angeles, San Fernando Valley (SFV), Ventura County, and Bakersfield markets.
              </p>
              <p>
                My real estate journey is built on passion, research, and community knowledge—not just transactions. Whether you’re a first-time buyer, a seller, or someone exploring investment opportunities, I’m here to guide you with energy, honesty, and dedication.
              </p>
              <p>
                My mission is simple: help people find the right home, the right neighborhood, and the right opportunity—with zero pressure and full support.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid-container">
            <div className="card">
              <img src="/images/properties/experience.jpg" alt="Local Knowledge" className="card-image" />
              <h3>Local Knowledge</h3>
              <ul>
                <li>Los Angeles & San Fernando Valley real estate</li>
                <li>Ventura County coastal & suburban markets</li>
                <li>Bakersfield family-oriented housing trends</li>
              </ul>
            </div>
            <div className="card">
              <img src="/images/properties/specialties.jpg" alt="What I Do Best" className="card-image" />
              <h3>What I Do Best</h3>
              <ul>
                <li>First-time buyer support</li>
                <li>Rental and income property advice</li>
                <li>Neighborhood-level strategy</li>
              </ul>
            </div>
            <div className="card">
              <img src="/images/properties/certifications.jpg" alt="Certifications" className="card-image" />
              <h3>Credentials</h3>
              <ul>
                <li>Licensed Real Estate Agent – CA DRE #02070444</li>
                <li>Partnered with Sunrise Star Realty, Chatsworth</li>
                <li>Driven by service, not sales quotas</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="why-choose-section">
            <h2>Why Choose Me</h2>
            <div className="why-grid">
              <div className="why-card">
                <i className="fas fa-map-marker-alt"></i>
                <h4>Deep Local Insight</h4>
                <p>I’ve lived and worked across LA, SFV, Ventura, and Bakersfield—helping clients where it matters most.</p>
              </div>
              <div className="why-card">
                <i className="fas fa-bolt"></i>
                <h4>Driven & Energetic</h4>
                <p>Always ready to hustle for your next home, showing up early, prepared, and sharp.</p>
              </div>
              <div className="why-card">
                <i className="fas fa-handshake"></i>
                <h4>Transparent & Trustworthy</h4>
                <p>You’ll always know the why behind every recommendation. No fluff, just facts.</p>
              </div>
              <div className="why-card">
                <i className="fas fa-user-graduate"></i>
                <h4>Fresh Perspective</h4>
                <p>As a new agent, I bring modern tools, digital skills, and nonstop learning into every client interaction.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="cta-section">
            <h2>Let’s Connect Today</h2>
            <Link to="/contact">
              <AnimatedButton>
                <i className="fas fa-phone-alt"></i> Get In Touch
              </AnimatedButton>
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default AboutMe;

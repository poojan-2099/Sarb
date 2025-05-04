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
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <Helmet>
        <title>About Your Trusted Real Estate Expert | SarbReal</title>
        <meta name="description" content="Meet your dedicated real estate professional serving Los Angeles and surrounding areas. Experience, expertise, and personalized service." />
      </Helmet>
      <div className="page about">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="about-content"
        >
          <motion.h1 variants={itemVariants} className="section-title">
            Your Dedicated Real Estate Partner
          </motion.h1>

          <motion.div variants={itemVariants} className="profile-section">
            <div className="profile-image-container">
              <img 
                src="/sb_about.jpg" 
                alt="SarbReal Real Estate Professional" 
                className="profile-image"
              />
            </div>
            <div className="profile-text">
              <p className="lead-text">
                With over a decade of experience in Southern California's dynamic real estate market, I bring unparalleled expertise and dedication to every client relationship.
              </p>
              <p>
                My approach combines in-depth market knowledge, innovative marketing strategies, and a commitment to exceeding client expectations. Whether you're buying your first home, selling a luxury property, or investing in real estate, I provide the guidance and support you need.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid-container">
            <div className="card">
              <img src="/images/properties/experience.jpg" alt="Experience" className="card-image" />
              <h3>Experience</h3>
              <ul>
                <li>10+ years in Southern California real estate</li>
                <li>Over 500 successful transactions</li>
                <li>Expertise in luxury and investment properties</li>
              </ul>
            </div>
            <div className="card">
              <img src="/images/properties/specialties.jpg" alt="Specialties" className="card-image" />
              <h3>Specialties</h3>
              <ul>
                <li>Residential property sales</li>
                <li>Investment property acquisition</li>
                <li>Market analysis and valuation</li>
              </ul>
            </div>
            <div className="card">
              <img src="/images/properties/certifications.jpg" alt="Certifications" className="card-image" />
              <h3>Certifications</h3>
              <ul>
                <li>Licensed California Real Estate Broker</li>
                <li>Luxury Home Marketing Specialist</li>
                <li>Certified Negotiation Expert</li>
                <li>DRE #02070444</li>
                <li>Partnered with Sunrise Star Realty, Chatsworth</li>
              </ul>
            </div>
          </motion.div>

          <motion.section variants={itemVariants} className="testimonial">
            "Their expertise in the Los Angeles market is unmatched. They helped us navigate a competitive market with confidence and secured our dream home." - Michael R.
          </motion.section>

          <motion.div variants={itemVariants} className="cta-section">
            <h2>Ready to Work Together?</h2>
            <Link to="/contact">
              <AnimatedButton>
                <i className="fas fa-handshake"></i> Let's Connect
              </AnimatedButton>
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default AboutMe; 
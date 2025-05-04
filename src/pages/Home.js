import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import AnimatedButton from "../components/AnimatedButton";
import ImageCarousel from "../components/ImageCarousel";
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const carouselImages = [
    {
      src: "/images/carousel/home1.jpg",
      alt: "Luxury Home",
      title: "Find Your Dream Home",
      description: "Discover exceptional properties across Southern California"
    },
    {
      src: "/images/carousel/home2.jpg",
      alt: "Modern Living",
      title: "Expert Real Estate Services",
      description: "Professional guidance for buying and selling properties"
    },
    {
      src: "/images/carousel/home3.jpg",
      alt: "Beautiful Neighborhood",
      title: "Local Market Expertise",
      description: "Deep knowledge of Los Angeles and surrounding areas"
    }
  ];

  return (
    <>
      <Helmet>
        <title>SarbReal | Premier Real Estate Services in Southern California</title>
        <meta name="description" content="Expert real estate services in Los Angeles, San Fernando Valley, Ventura County, Bakersfield, and Santa Clarita. Find your dream home today." />
      </Helmet>
      <div className="page home">
        <ImageCarousel images={carouselImages} />

        <motion.section className="hero" {...fadeIn}>
          <h1 className="section-title">Elevating Your Real Estate Experience</h1>
          <p className="hero-text">
            Discover exceptional properties across Southern California's most desirable locations.
          </p>
          <div className="signature">
            <span className="signature-text">Sarbjit Sogy </span><br></br>
            <span className="signature-subtext">DRE #02070444 | Partnered with Sunrise Star Realty, Chatsworth</span>
          </div>
        </motion.section>

        <motion.section 
          className="grid-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="card">
            <img src="images/properties/local-expertise.jpg" alt="Local Expertise" className="card-image" />
            <h3>Local Expertise</h3>
            <p>Deep understanding of Los Angeles and surrounding markets, ensuring you make informed decisions.</p>
          </div>
          <div className="card">
            <img src="/images/properties/premium-service.jpg" alt="Premium Service" className="card-image" />
            <h3>Premium Service</h3>
            <p>Personalized attention and strategic guidance throughout your real estate journey.</p>
          </div>
          <div className="card">
            <img src="/images/properties/market-insight.jpg" alt="Market Insight" className="card-image" />
            <h3>Market Insight</h3>
            <p>Access to exclusive listings and comprehensive market analysis.</p>
          </div>
        </motion.section>
{/* 
        <section className="testimonial">
          "Working with Sarb was an exceptional experience. Their knowledge of the Los Angeles market helped us find our perfect home." - Sarah M.
        </section> */}

        <motion.section 
          className="featured-areas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2>Featured Areas</h2>
          <div className="grid-container">
            <div className="card">
              <img src="/images/areas/los-angeles.jpg" alt="Los Angeles" className="card-image" />
              <h4>Los Angeles</h4>
              <p>Urban luxury and cultural diversity</p>
            </div>
            <div className="card">
              <img src="/images/areas/san-fernando.jpg" alt="San Fernando Valley" className="card-image" />
              <h4>San Fernando Valley</h4>
              <p>Suburban comfort with city access</p>
            </div>
            <div className="card">
              <img src="/images/areas/ventura.jpg" alt="Ventura County" className="card-image" />
              <h4>Ventura County</h4>
              <p>Coastal living and natural beauty</p>
            </div>
            <div className="card">
              <img src="/images/areas/santa-clarita.jpg" alt="Santa Clarita" className="card-image" />
              <h4>Santa Clarita</h4>
              <p>Family-friendly communities</p>
            </div>
            <div className="card">
              <img src="/images/areas/baker.jpg" alt="Santa Clarita" className="card-image" />
              <h4>Bakersfield</h4>
              <p>Family-friendly communities</p>
            </div>
          </div>
        </motion.section>

        <motion.div 
          className="cta-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h2>Ready to Find Your Dream Home?</h2>
          <Link to="/contact">
            <AnimatedButton>
              <i className="fas fa-calendar"></i> Schedule a Consultation
            </AnimatedButton>
          </Link>
        </motion.div>

        
      </div>
    </>
  );
};

export default Home; 
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
        <title>Top Real Estate Agent in Los Angeles, SFV, Ventura & Bakersfield | SarbReal</title>
        <meta
          name="description"
          content="Looking to buy or sell a home in Los Angeles, San Fernando Valley, Ventura County, or Bakersfield? Sarbjit Sogy at SarbReal provides expert real estate guidance, local insight, and personalized service for home buyers, sellers, and investors."
        />
        <meta
          name="keywords"
          content="real estate agent Los Angeles, homes for sale in SFV, Ventura County realtor, Bakersfield property, Sarbjit Sogy, SarbReal, CA DRE 02070444, Southern California real estate"
        />
        <meta name="author" content="Sarbjit Sogy - SarbReal" />
        <meta property="og:title" content="SarbReal | Real Estate Agent in LA, SFV, Ventura, Bakersfield" />
        <meta property="og:description" content="Trusted real estate services by Sarbjit Sogy. Serving LA, San Fernando Valley, Ventura County, and Bakersfield with local expertise and dedication." />
        <meta property="og:image" content="/images/seo-preview.jpg" />
        <meta property="og:url" content="https://www.sarbreal.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.sarbreal.com" />
      </Helmet>

      <div className="page home">
        <ImageCarousel images={carouselImages} />
        <motion.section 
          className="call-action-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="call-action-title">Let’s Talk Real Estate</h2>
          <div className="call-action-content">
            <div className="call-action-left">
              <ul>
                <li>Thinking about buying your first home?</li>
                <li>Thought about selling?</li>
                <li>Is your lease expiring?</li>
                <li>Not sure if it’s the right time to invest?</li>
                <li>Planning to buy in Los Angeles but unsure where?</li>
              </ul>
            </div>
            <div className="call-action-right">
              <p>
                Stop imagining—take action today. I’m <strong>Sarbjit Sogy</strong>, a driven, energetic agent born and raised in LA. 
                I know the neighborhoods, the market, and how to get you the best deal—whether you're buying or selling.
              </p>
              <a href="tel:+18184248039" className="call-now-btn">📞 Call  Now: (818) 424-8039</a>
            </div>
          </div>
        </motion.section>


        <section className="profile-section">
          <div className="profile-image-container">
            <img src="/sb_about.jpg" alt="Sarbjit Sogy" className="profile-image" />
          </div>
          <div className="profile-text">
            <h2 className="section-title">Meet Your Agent</h2>
            <p className="lead-text">
              I'm <strong>Sarbjit Sogy</strong>, a dedicated real estate professional born and raised in Los Angeles. With deep market knowledge and a strong drive, I specialize in helping buyers and sellers throughout LA, SFV, and Bakersfield.
            </p>
            <p>
              Whether you're buying your first home, selling a property, or investing, I'm here to guide you every step of the way with transparency, hustle, and expertise.
            </p>
            <p className="dre-info">
              Call me directly at <a href="tel:+18184248039" style={{ color: '#2B6CB0' }}>(818) 424-8039</a><br />
              DRE #: 02070444
            </p>
          </div>
        </section>

        <motion.section className="hero" {...fadeIn}>
          <h1 className="section-title">Elevating Your Real Estate Experience</h1>
          <p className="hero-text">
            Discover exceptional properties across Southern California's most desirable locations.
          </p>
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
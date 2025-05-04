import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import AnimatedButton from '../components/AnimatedButton';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_g7p5x7h', // Replace with your EmailJS service ID
      'template_x4fklbq', // Replace with your EmailJS template ID
      form.current,
      '8Hce8LnKi2fG0SlOL' // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact SarbReal | Get in Touch Today</title>
        <meta name="description" content="Contact SarbReal for expert real estate services in Southern California. Schedule a consultation today." />
      </Helmet>

      <div className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1>Let's Connect</h1>
            <p>Ready to start your real estate journey? Contact me today for a personalized consultation.</p>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="contact-form-container">
            <div className="contact-info">
            <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+18184248039">
                    <p>+1 (818) 424-8039</p>
                  </a>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:sarbreal@gmail.com">
                    <p>sarbreal@gmail.com</p>
                  </a>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Office</h3>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Northridge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Northridge</p>
                  </a>
                </div>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input type="hidden" name="to_email" value="your@email.com" />
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Your Phone"
                  required
                />
              </div>
              <div className="form-group">
                <select name="service_type" required>
                  <option value="">Select Service</option>
                  <option value="buy">Buy a Home</option>
                  <option value="sell">Sell a Home</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <AnimatedButton type="submit">
                Send Message
              </AnimatedButton>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactMe; 
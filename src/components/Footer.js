// src/components/Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-5 pb-4 mt-auto">
      <Container>
        <Row>
          <Col md={4}>
            <h5>GlowLuxe</h5>
            <p>Premium skincare and makeup products curated for every beauty lover.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-white text-decoration-none">Products</Link></li>
              <li><Link to="/about-us" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/faq" className="text-white text-decoration-none">FAQs</Link></li>
              <li><Link to="/terms" className="text-white text-decoration-none">Terms & Conditions</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <address>
              Email: xayashrxx.0101@gmail.com<br />
              Phone: +91 6380313115
            </address>
          </Col>
        </Row>
        <hr className="bg-white mt-4 mb-3" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} GlowLuxe. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
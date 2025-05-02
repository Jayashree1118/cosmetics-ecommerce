import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import aboutImage from '../assets/images/about-hero.jpg'; // Optional image

import './AboutUs.css';

const AboutUs = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-md-center mb-4">
        <Col md={10} lg={8} className="text-center">
          <h1 className="display-5 fw-bold">About Us</h1>
          <p className="lead">Welcome to GlowLuxe – where beauty meets integrity.</p>
        </Col>
      </Row>

      <Row className="mb-5 align-items-center">
        {/* Optional: Add hero image */}
        {/* <Col md={6}>
          <img src={aboutImage} alt="About GlowLuxe" className="img-fluid rounded shadow-sm" />
        </Col> */}

        <Col md={12}>
          <Card className="p-4 shadow-sm">
            <h2 className="h4">Our Story</h2>
            <p>
              Founded in 2024, our mission has always been to provide innovative beauty solutions that make a difference.
              With dedication and hard work, we've grown into a trusted brand serving thousands of satisfied customers.
            </p>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <Card className="p-4 shadow-sm h-100">
            <h2 className="h4">Our Mission</h2>
            <p>
              To empower individuals and businesses through high-quality, ethical cosmetics that celebrate natural beauty.
            </p>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4 shadow-sm h-100">
            <h2 className="h4">Our Values</h2>
            <ul>
              <li>Cruelty-free & Vegan</li>
              <li>Eco-friendly packaging</li>
              <li>Customer-first approach</li>
              <li>Inclusive product lines</li>
            </ul>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={12}>
          <Card className="p-4 shadow-sm bg-light">
            <h2 className="h4">Contact Us</h2>
            <p>Email: xayashrxx.0101@gmail.com</p>
            <p>Phone: +91 6380313115</p>
            <p>We'd love to hear from you!</p>
          </Card>
        </Col>
      </Row>

      <div className="text-center">
        <Button as={Link} to="/" variant="outline-primary">
          Back to Home
        </Button>
      </div>
    </Container>
  );
};

export default AboutUs;
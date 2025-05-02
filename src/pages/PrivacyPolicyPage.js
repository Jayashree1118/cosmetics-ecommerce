import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={10} lg={8} className="mx-auto">
          <Card className="p-4 shadow-sm rounded">
            <h2 className="mb-4 text-primary">Privacy Policy</h2>

            <p className="lead">
              At GlowLuxe, we respect your privacy and are committed to protecting your personal data.
              This policy outlines how we collect, use, and safeguard your information when you visit our website or make a purchase.
            </p>

            <h5 className="mt-4">Data We Collect</h5>
            <p>
              We may collect:
            </p>
            <ul>
              <li>Personal identification information (such as name, email address)</li>
              <li>Usage data (pages visited, time spent, browsing behavior)</li>
              <li>Device and browser information for security and analytics purposes</li>
            </ul>

            <h5 className="mt-4">Use of Your Data</h5>
            <p>
              Your data is used to:
            </p>
            <ul>
              <li>Process orders and manage your account</li>
              <li>Improve user experience and personalize content</li>
              <li>Send promotional emails (only if you've opted in)</li>
            </ul>

            <h5 className="mt-4">Security Measures</h5>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h5 className="mt-4">Third-Party Services</h5>
            <p>
              We may use third-party services (like payment processors or analytics tools) that have their own privacy policies. We are not responsible for the practices of these third parties.
            </p>

            <div className="text-center mt-4">
              <Button as={Link} to="/" variant="outline-primary">
                Back to Home
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicyPage;
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndConditionsPage = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={10} lg={8} className="mx-auto">
          <Card className="p-4 shadow-sm rounded">
            <h2 className="mb-4 text-primary">Terms and Conditions</h2>

            <p className="lead">
              Welcome to GlowLuxe. By accessing or using our website, you agree to be bound by the following terms and conditions.
            </p>

            <h5 className="mt-4">1. Use of Site</h5>
            <p>
              You agree to use this website only for lawful purposes and in accordance with these terms. Unauthorized use of the site may result in termination of your access.
            </p>

            <h5 className="mt-4">2. Intellectual Property</h5>
            <p>
              All content on this site, including but not limited to text, images, logos, graphics, and software, is the property of GlowLuxe and protected by applicable copyright and trademark laws.
            </p>

            <h5 className="mt-4">3. Product Information</h5>
            <p>
              We aim to provide accurate product descriptions, pricing, and availability. However, we reserve the right to modify or discontinue any product at any time without notice.
            </p>

            <h5 className="mt-4">4. Limitation of Liability</h5>
            <p>
              In no event shall GlowLuxe be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of this website or products obtained through it.
            </p>

            <h5 className="mt-4">5. User Conduct</h5>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Violate any local, national, or international laws</li>
              <li>Attempt to interfere with the performance or security of the website</li>
              <li>Use the site for commercial solicitation or spamming</li>
            </ul>

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

export default TermsAndConditionsPage;
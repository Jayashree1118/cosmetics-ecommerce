import React from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FaqPage = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={10} lg={8} className="mx-auto">
          <h2 className="mb-4 text-center">Frequently Asked Questions</h2>

          <Accordion defaultActiveKey="0" flush>
            <Card>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How long does shipping take?</Accordion.Header>
                <Accordion.Body>
                  We offer standard delivery within 3–7 business days and express shipping within 1–3 days.
                </Accordion.Body>
              </Accordion.Item>
            </Card>

            <Card>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Can I return products?</Accordion.Header>
                <Accordion.Body>
                  You can return unopened items within 30 days of purchase for a full refund.
                </Accordion.Body>
              </Accordion.Item>
            </Card>

            <Card>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Are products cruelty-free?</Accordion.Header>
                <Accordion.Body>
                  Yes! All our products are cruelty-free and vegan-friendly.
                </Accordion.Body>
              </Accordion.Item>
            </Card>

            <Card>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Do you ship internationally?</Accordion.Header>
                <Accordion.Body>
                  Currently, we only deliver within the United States. International shipping coming soon!
                </Accordion.Body>
              </Accordion.Item>
            </Card>

            <Card>
              <Accordion.Item eventKey="4">
                <Accordion.Header>How do I track my order?</Accordion.Header>
                <Accordion.Body>
                  Once shipped, you’ll receive an email with tracking details.
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          </Accordion>

          <div className="text-center mt-4">
            <Button as={Link} to="/" variant="outline-primary">
              Back to Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FaqPage;
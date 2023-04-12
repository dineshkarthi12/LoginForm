import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Homepage() {
  return (
    <div className="homepage">
      <div className="hero">
        <Container>
          <Row>
            <Col md={6}>
              <h1>Welcome to Our Store</h1>
              <p>Discover the latest trends in fashion and accessories.</p>
              <Button variant="primary">Shop Now</Button>
            </Col>
            <Col md={6}>
              <img src="https://example.com/banner.jpg" alt="Banner" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="featured">
        <Container>
          <h2>Featured Products</h2>
          <Row>
            <Col md={4}>
              <img src="https://example.com/product1.jpg" alt="Product 1" />
              <h3>Product 1</h3>
              <p>$49.99</p>
            </Col>
            <Col md={4}>
              <img src="https://example.com/product2.jpg" alt="Product 2" />
              <h3>Product 2</h3>
              <p>$29.99</p>
            </Col>
            <Col md={4}>
              <img src="https://example.com/product3.jpg" alt="Product 3" />
              <h3>Product 3</h3>
              <p>$39.99</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="newsletter">
        <Container>
          <h2>Subscribe to Our Newsletter</h2>
          <p>Stay up to date on our latest products and promotions.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <Button variant="primary">Subscribe</Button>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default Homepage;

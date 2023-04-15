import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <span>Dedicated to creating impactful solutions!</span>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer
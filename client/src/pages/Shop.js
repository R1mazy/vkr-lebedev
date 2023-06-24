import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CoursesList from '../components/CoursesList';
import TypeBar from "../components/TypeBar"

const Shop = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <CoursesList/>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
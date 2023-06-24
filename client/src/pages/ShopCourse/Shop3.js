import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CoursesAll3 from '../../components/CoursesAll/CoursesAll';
import TypeBar3 from "../../components/CoursesAll/TypeBar3"

const Shop3 = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypeBar3/>
        </Col>
        <CoursesAll3 />
      </Row>
    </Container>
  );
};

export default Shop3;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CoursesAll2 from '../../components/CoursesAll/CoursesAll2';
import TypeBar2 from "../../components/CoursesAll/TypeBar2"

const Shop2 = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypeBar2/>
        </Col>
        <CoursesAll2 />
      </Row>
    </Container>
  );
};

export default Shop2;
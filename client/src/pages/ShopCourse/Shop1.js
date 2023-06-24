import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CoursesAll1 from '../../components/CoursesAll/CoursesAll1';
import TypeBar1 from "../../components/CoursesAll/TypeBar1"

const Shop1 = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar1 />
                </Col>
                <Col md={9}>
                    <CoursesAll1 />
                </Col>
            </Row>
        </Container>
    );
};

export default Shop1;
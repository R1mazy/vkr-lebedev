import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CoursesAll from '../../components/CoursesAll/CoursesAll';
import TypeBar from "../../components/CoursesAll/TypeBar"

const ShopAll = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <CoursesAll />
                </Col>
            </Row>
        </Container>
    );
};

export default ShopAll;
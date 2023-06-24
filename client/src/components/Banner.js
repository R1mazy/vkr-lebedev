import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import header2Img from "../assets/img/book.png";
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import 'animate.css';
import { useHistory } from 'react-router-dom'



const Banner = () => {

    const history = useHistory()


    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Skillbox", "Web Designer", "UI/UX Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])



    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }




    return (
        <section className="banner" >
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        
                                <div >
                                    <span className="tagline">Приветствуем на StudyWay</span>
                                    <h1>{`Привет! Я помогу вам выбрать образовательный курс с таких платформ как `} <span className="txt-rotate" dataPeriod="10" data-rotate='[ "Skillbox", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>Образовательные курсы могут предоставить студентам возможность работать над реальными проектами и получить опыт в разработке. В целом, образовательные курсы помогают стать более компетентными в своей работе и повысить свою конкурентоспособность на рынке труда.</p>
                                    {/* <button  onClick={() => history.push(LOGIN_ROUTE)}>Все курсы <ArrowRightCircle size={25} /></button> */}
                                </div>
                        
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Banner;
import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, COURSES_ROUTE, HISTORY_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, SHOP1_ROUTE, SHOP2_ROUTE, SHOP3_ROUTE, SHOPALL_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button, NavDropdown } from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { useHistory } from 'react-router-dom'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        console.log(user.id)
    }

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])


    return (
        <Navbar  bg="dark" variant="dark" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Nav className="ms-auto">
                    <Nav.Link style={{ color: 'white' }} href={MAIN_ROUTE} >StudyWay</Nav.Link>
                    <Nav.Link style={{ color: 'white' }} href={SHOP_ROUTE} className="ml-5">Курсы</Nav.Link>


                    {/*<NavDropdown className="ml-5" style={{ color: 'white'}}*/}
                    {/*    id="nav-dropdown-dark-example"*/}
                    {/*    title="Курсы"*/}
                    {/*    menuVariant="black"*/}
                    {/*>*/}
                    {/*    <NavDropdown.Item href={SHOPALL_ROUTE}>Все курсы</NavDropdown.Item>*/}
                    {/*    <NavDropdown.Item href={SHOP1_ROUTE}>GeekBrains</NavDropdown.Item>*/}
                    {/*    <NavDropdown.Item href={SHOP2_ROUTE}>Skillbox</NavDropdown.Item>*/}
                    {/*    <NavDropdown.Item href={SHOP3_ROUTE}>Udemy</NavDropdown.Item>*/}
                    {/*</NavDropdown>*/}
                </Nav>


                <Nav className="social-icon">
                    <a href="#"><img src={navIcon1} alt="" /></a>
                    <a href="#"><img src={navIcon2} alt="" /></a>
                    <a href="#"><img src={navIcon3} alt="" /></a>
                </Nav>


                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)} >Профиль</Button>
                        <Button variant={"outline-light"} onClick={() => logOut()} className="ml-2" >Выйти</Button>
                        
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)} >Авторизация</Button>
                    </Nav>
                }

            </Container>


        </Navbar>

    )
})

export default NavBar
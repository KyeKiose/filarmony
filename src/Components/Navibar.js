
import React, {useState} from 'react';
import { Navbar, Nav, Button, Container, Modal, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const Styles = styled.div `
    a, .navbar-brand, .navbar-nav .nav-link{
        color: #000000;
        &:hover {
            color: #adb1b8;
        }
    }
`
export default function NaviBar(){
    return (
        <>
        <Styles>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>Черкаська обласна філармонія</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/">Головна</Link></Nav.Link>
                            <Nav.Link><Link to="/about">Про філармонію</Link></Nav.Link>
                            <Nav.Link><Link to="/afisha">Афіша</Link></Nav.Link>
                            <Nav.Link><Link to="/artists">Колективи і солісти</Link></Nav.Link>                            
                            <Nav.Link><Link to="/contacts">Контакти</Link></Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>
        </>
    )
}
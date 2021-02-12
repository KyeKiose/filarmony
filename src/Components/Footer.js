import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
    <Container fluid style={{backgroundColor: '#212529', color: '#fff'}}>
        <Container style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
            <p>Черкаська обласна філармонія</p>
        </Container>
    </Container>
)

export default Footer;
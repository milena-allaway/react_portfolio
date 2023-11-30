// import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import { Container } from 'react-bootstrap';
import "../style/style.css";

export default function Header() {
    return (
        <Navbar bg="light" variant="light" expand="lg" className='sticky-top'>
            <Container className='header-section'>
                <Navbar.Brand href="/">Milena Wheatcroft</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navigation />
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
}
    
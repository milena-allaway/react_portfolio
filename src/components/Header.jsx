// import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import { Container } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Milena Wheatcroft&apos;s<br />React Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navigation />
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
}
    
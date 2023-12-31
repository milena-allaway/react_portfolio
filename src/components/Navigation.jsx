import "../style/style.css";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink to="/" className="nav-link" activeclassname="active">
              About Me
            </NavLink>
            <NavLink
              to="/portfolio"
              className="nav-link"
              activeclassname="active"
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              activeclassname="active"
            >
              Contact
            </NavLink>
            <NavLink to="/resume" className="nav-link" activeclassname="active">
              Resume
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

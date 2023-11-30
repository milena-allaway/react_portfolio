import "../style/style.css";
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
  return (
    <Nav className="mr-auto">
      <NavLink to="/" className="nav-link" activeclassname="active">
        About Me
      </NavLink>
      <NavLink to="/portfolio" className="nav-link" activeclassname="active">
        Portfolio
      </NavLink>
      <NavLink to="/contact" className="nav-link" activeclassname="active">
        Contact
      </NavLink>
      <NavLink to="/resume" className="nav-link" activeclassname="active">
        Resume
      </NavLink>
    </Nav>
  );
}
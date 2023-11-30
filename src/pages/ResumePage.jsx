import "../style/style.css";
import PDF from '../assets/milenaWheatcroftResume.pdf';
import { Container } from "react-bootstrap";

export default function Resume() {
  return (
    <Container>
    <div className="resume-section">
      <h1>Resume</h1>
      <br />

      {/* Link to Downloadable Resume */}
      <p>
        Download my resume{' '}
        <a href={PDF} download className="btn btn-outline-dark">
          here
        </a>
        .
      </p>
      <br />

      {/* List of Developer Proficiencies */}
      <div>
        <h3>Technical Proficiencies</h3>
        <ul className="list-group">
            <li className="list-group-item">React.js, Node.js, Express.js</li>
            <li className="list-group-item">JavaScript, jQuery, HTML, CSS</li>
            <li className="list-group-item">MySql, MongoDB, IndexedDB, GraphQL</li>
            <li className="list-group-item">Bootstrap, Materialize CSS</li>
            <li className="list-group-item">Git, GitHUb, Heroku, Render, Netlify</li>
            <li className="list-group-item">RESTful APIs, JSON</li>
            <li className="list-group-item">MERN Stack</li>
            <li className="list-group-item">Progressive Web Applications (PWAs)</li>
            <li className="list-group-item">Object Oriented Programming (OOP)</li>
          
        </ul>
      </div>
    </div>
    </Container>
  );
}
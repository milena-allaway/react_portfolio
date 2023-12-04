import { Container, Row, Col } from "react-bootstrap";
import PDF from "../assets/milenaWheatcroftResume.pdf";
import "../style/resume.css";

export default function Resume() {
  return (
    <Container fluid>
      <div className="resume-section">
        <h1>Resume</h1>
        <br />

        <Row>
          <Col xs={12} md={6}>
            {/* Front-end Technologies */}
            <div>
              <h3>Front-end Technologies</h3>
              <ul className="list-group">
                <li className="list-group-item">React.js</li>
                <li className="list-group-item">JavaScript, jQuery</li>
                <li className="list-group-item">HTML, CSS</li>
                <li className="list-group-item">Bootstrap, Materialize CSS</li>
              </ul>
            </div>
          </Col>

          <Col xs={12} md={6}>
            {/* Back-end Technologies */}
            <div>
              <h3>Back-end Technologies</h3>
              <ul className="list-group">
                <li className="list-group-item">Node.js, Express.js</li>
                <li className="list-group-item">
                  MySql, MongoDB, IndexedDB, GraphQL
                </li>
                <li className="list-group-item">RESTful APIs, JSON</li>
                <li className="list-group-item">MERN Stack</li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Link to Downloadable Resume */}
        <Row className="mt-4">
          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="resume-text">
              <p>Check out my resume!</p>
              <a href={PDF} download className="btn btn-outline-dark">
                Download Here
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

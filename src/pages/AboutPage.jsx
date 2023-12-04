import { Container, Row, Col } from "react-bootstrap";
import "../style/style.css"; // Make sure to import your custom styles

export default function AboutMePage() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={8}>
          <div>
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              gravida massa vitae maximus euismod. Aliquam euismod vulputate
              massa, eget suscipit urna ultricies et. Integer at volutpat urna.
              Sed nec justo aliquam, eleifend libero eu, hendrerit justo. Nullam
              at ipsum ultrices, posuere sem a, ullamcorper arcu. Nullam sit
              amet facilisis velit, non imperdiet enim. Duis vel risus ac urna
              rhoncus aliquet. Nulla facilisi. Praesent sed leo eget est gravida
              eleifend vel vel ligula. Duis auctor malesuada nisl, vel convallis
              felis malesuada et. Vestibulum tincidunt, eros sit amet ultrices
              euismod, elit felis vulputate libero, auctor malesuada lacus neque
              id velit. Vivamus auctor risus vel tincidunt dapibus.
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          md={4}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="photo-container">
            <img src="avatar.jpg" alt="My Photo" className="photo" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

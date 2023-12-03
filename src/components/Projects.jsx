/* eslint-disable react/prop-types */
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaGithubSquare } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";


const ProjectCard = ({ title, imageSrc, siteLink, githubLink }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id={`tooltip-${title}`}>
              <strong>Visit Site</strong>
            </Tooltip>
          }
        >
          <a href={siteLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-1">
            <i className="bi bi-globe"></i>
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id={`tooltip-${title}-github`}>
              <strong>GitHub Repo</strong>
            </Tooltip>
          }
        >
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mx-1">
            <i className="bi bi-github"></i>
          </a>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;

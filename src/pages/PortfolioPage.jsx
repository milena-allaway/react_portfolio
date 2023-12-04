import "../style/projects.css";
import ProjectCard from "../components/Projects";

export default function Portfolio() {
  const projects = [
    {
      title: "JATE Text Editor",
      imageSrc: "./jate.png",
      siteLink: "https://text-editor-tcmj.onrender.com/",
      githubLink: "https://github.com/milena-allaway/text_editor",
    },
    {
      title: "Weather Dashboard",
      imageSrc: "./weathersearchclick.png",
      siteLink: "https://milena-allaway.github.io/weather_dashboard/",
      githubLink: "https://github.com/milena-allaway/weather_dashboard",
    },
    {
      title: "Work Day Scheduler",
      imageSrc: "./agenda.png",
      siteLink: "https://milena-allaway.github.io/agenda/",
      githubLink: "https://github.com/milena-allaway/agenda",
    },
    {
      title: "Basic Portfolio",
      imageSrc: "./portfolio_screenshot.png",
      siteLink: "https://milena-allaway.github.io/milena_portfolio/",
      githubLink: "https://github.com/milena-allaway/milena_portfolio",
    },
    {
      title: "TravIS",
      imageSrc: "./travis.png",
      siteLink: "https://travis231017-9762a24c277b.herokuapp.com/",
      githubLink: "https://github.com/UofTTeam2/TravIS",
    },
    {
      title: "Password Generator",
      imageSrc: "./password_generator.png",
      siteLink: "https://milena-allaway.github.io/password_generator/",
      githubLink: "https://github.com/milena-allaway/password_generator",
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center">Projects</h1>
      <br />
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4 projects">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

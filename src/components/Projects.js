import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import wonderLearn from "../assets/img/project-img1.jpg";
import calculator from "../assets/img/project-img2.jpg";
import taskManager from "../assets/img/project-img3.jpg";
// import background from "../assets/img/background.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const webappProjects = [
    {
      title: "WonderLearn Kids",
      description: "A responsive website for a kids learning center",
      imgUrl: wonderLearn,
      projUrl: "https://wonderlearnkids.netlify.app/",
    },
    {
      title: "Calculator App",
      description: "A calculator with light mode and dark mode",
      imgUrl: calculator,
      projUrl: "https://calculator-qian.netlify.app/",
    },
    {
      title: "Task Manager App",
      description: "A task manager app with custom theme",
      imgUrl: taskManager,
      projUrl: "https://taskmanager-qian.netlify.app",
    },
  ];

  const SPAProjects = [
    {
      title: "WonderLearn Kids",
      description: "A responsive website for a kids learning center",
      imgUrl: wonderLearn,
      projUrl: "https://wonderlearnkids.netlify.app/",
    },
    {
      title: "Calculator App",
      description: "A calculator with light mode and dark mode",
      imgUrl: calculator,
      projUrl: "https://calculator-qian.netlify.app/",
    },
    {
      title: "Task Manager App",
      description: "A task manager app with custom theme",
      imgUrl: taskManager,
      projUrl: "https://taskmanager-qian.netlify.app",
    },
  ];

  const RDProjects = [
    {
      title: "WonderLearn Kids",
      description: "A responsive website for a kids learning center",
      imgUrl: wonderLearn,
      projUrl: "https://wonderlearnkids.netlify.app/",
    },
    {
      title: "Calculator App",
      description: "A calculator with light mode and dark mode",
      imgUrl: calculator,
      projUrl: "https://calculator-qian.netlify.app/",
    },
    {
      title: "Task Manager App",
      description: "A task manager app with custom theme",
      imgUrl: taskManager,
      projUrl: "https://taskmanager-qian.netlify.app",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        {/* <img className="background" src={background} alt="background"></img> */}
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="header">
                    <h1>My Projects</h1>
                  </div>
                  {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Single Page App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Responsive Design</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webappProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {SPAProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {RDProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

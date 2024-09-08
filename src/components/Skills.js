import icon1 from "../assets/img/icon-html.svg";
import icon2 from "../assets/img/icon-css3.svg";
import icon3 from "../assets/img/icon-javascript.svg";
import icon4 from "../assets/img/icon-react-js.svg";
import icon5 from "../assets/img/icon-node-js.svg";
import icon6 from "../assets/img/icon-bootstrap.svg";
import icon7 from "../assets/img/icon-c-sharp.svg";
import icon8 from "../assets/img/icon-figma.svg";
import icon9 from "../assets/img/icon-git.svg";
import icon10 from "../assets/img/icon-github.svg";
import icon11 from "../assets/img/icon-java.svg";
// import icon12 from "../assets/img/icon-jquery.svg";
import icon13 from "../assets/img/icon-mongodb.svg";
import icon14 from "../assets/img/icon-nextjs.svg";
import icon15 from "../assets/img/icon-oracle-pl-sql.svg";
import icon16 from "../assets/img/icon-postgresql.svg";
import icon17 from "../assets/img/icon-python.svg";
// import bg from "../assets/img/banner-bg.png";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";

import styles from "./Skills.module.css";

const Skills = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  const skills = [
    { name: "JavaScript", icon: icon3, bgColor: "#000" },
    { name: "C #", icon: icon7, bgColor: "#000" },
    { name: "Java", icon: icon11, bgColor: "#000" },
    { name: "Python", icon: icon17, bgColor: "#000" },
    { name: "HTML5", icon: icon1, bgColor: "#000" },
    { name: "CSS3", icon: icon2, bgColor: "#000" },
    { name: "Bootstrap", icon: icon6, bgColor: "#000" },
    { name: "React JS", icon: icon4, bgColor: "#000" },
    { name: "Node JS", icon: icon5, bgColor: "#000" },
    { name: "NextJS", icon: icon14, bgColor: "#000" },
    { name: "Git", icon: icon9, bgColor: "#000" },
    { name: "GitHub", icon: icon10, bgColor: "#000" },
    { name: "MongoDB", icon: icon13, bgColor: "#000" },
    { name: "Oracle SQL", icon: icon15, bgColor: "#000" },
    { name: "PostgreSQL", icon: icon16, bgColor: "#000" },
    { name: "Figma", icon: icon8, bgColor: "#000" },
  ];

  return (
    <section className={styles.skill} id="skills">
      <div className="header">
        <h1>My Skills</h1>
      </div>

      <div className={styles["skill-container"]}>
        {skills.map((skill) => {
          return (
            <div className={styles["skill-box"]}>
              <div className={styles["skill-title"]}>
                <div className={styles.image}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={styles["skill-icon"]}
                  />
                </div>
                <h5>{skill.name}</h5>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="row">
        <div className="col-12">
          <div className="skill-bx wow zoomIn">
            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme skill-slider"
            >
              <div className="item">
                <img src={icon1} alt="HTML/CSS Icon" />
                <h5>HTML/CSS</h5>
              </div>
              <div className="item">
                <img src={icon2} alt="JavaScript Icon" />
                <h5>JavaScript</h5>
              </div>
              <div className="item">
                <img src={icon3} alt="Responsive Design Icon" />
                <h5>Responsive Design</h5>
              </div>
              <div className="item">
                <img src={icon4} alt="React Framework Icon" />
                <h5>Front-End Frameworks</h5>
              </div>
            </Carousel>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Skills;

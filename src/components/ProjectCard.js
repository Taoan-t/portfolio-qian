import { Col } from "react-bootstrap";
import { RiGithubFill, RiApps2Line } from "@remixicon/react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, description, imgUrl, projUrl }) => {
  const handleClick = () => {
    window.open(projUrl, "_blank");
  };
  return (
    <Col sm={6} md={4}>
      <div
        className={styles["proj-imgbx"]}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <img src={imgUrl} alt={title} />
        <div className={styles["proj-txtx"]}>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;

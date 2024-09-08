import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="justify-content-center">
          <Col sm={6} className="text-center">
            <p>CopyRight © 2024 Qian Tang. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

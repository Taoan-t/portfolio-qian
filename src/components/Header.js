import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import {
  RiLeafLine,
  RiApps2Line,
  RiCloseLargeLine,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "@remixicon/react";

const Header = () => {
  /*=============== ADD BLUR HEADER ===============*/
  const headerRef = useRef();

  const blurHeader = () => {
    const header = headerRef.current;

    if (header) {
      if (window.scrollY >= 50) {
        header.classList.add(`${styles["blur-header"]}`);
      } else {
        header.classList.remove(`${styles["blur-header"]}`);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", blurHeader);

    return () => {
      window.removeEventListener("scroll", blurHeader);
    };
  }, []);

  /*=============== SHOW MENU ===============*/
  const [show, setShow] = useState(false);

  function showMenu() {
    setShow(true);
  }

  function closeMenu() {
    setShow(false);
  }

  /*=============== Connect button ===============*/
  function handleConnectBtn() {
    const connectSection = document.getElementById("connect");

    if (connectSection) {
      window.location.hash = "#connect";
      connectSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className={styles.header} id="header" ref={headerRef}>
      <nav className={`${styles.nav} ${styles.container}`}>
        <a href="#home" className={styles["nav__logo"]}>
          <RiLeafLine />
          <span>Qian Tang</span>
        </a>

        <div
          className={
            show
              ? `${styles["nav__menu"]} ${styles["show-menu"]}`
              : styles["nav__menu"]
          }
          id="nav-menu"
        >
          <ul className={styles["nav__list"]}>
            <li>
              <a
                href="#home"
                className={styles["nav__link"]}
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={styles["nav__link"]}
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={styles["nav__link"]}
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
          </ul>

          {/* Close button */}
          <div
            className={styles["nav__close"]}
            id="nav-close"
            onClick={closeMenu}
          >
            <RiCloseLargeLine />
          </div>
        </div>

        {/* Contact Span */}
        <span className={styles["navbar-text"]}>
          <div className={styles["social-icon"]}>
            <a
              href="https://www.linkedin.com/in/qian-tang-8b373023b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinBoxFill className={styles.icon} />
            </a>
            <a
              href="https://github.com/Taoan-t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubFill className={styles.icon} />
            </a>
          </div>
          <button className="vvd" onClick={handleConnectBtn}>
            <span>Let's connect</span>
          </button>
        </span>

        {/* Toggle button  */}
        <div
          className={styles["nav__toggle"]}
          id="nav-toggle"
          onClick={showMenu}
        >
          <RiApps2Line />
        </div>
      </nav>
    </header>
  );
};

export default Header;

import gsap from "gsap"; // import GSAP
import { useGSAP } from "@gsap/react"; // import the hook
import { CSSPlugin } from "gsap/CSSPlugin";

import "animate.css";
import TrackVisibility from "react-on-screen";
import { ArrowRightCircle } from "react-bootstrap-icons";

import { useState, useEffect, useRef, useCallback } from "react";

import styles from "./Hero.module.css";
import bg from "../assets/img/hero-bg.jfif";
// import img1 from "../assets/img/hero-cherry-blossom.png";
import img2 from "../assets/img/hero-boat.png";
import img3 from "../assets/img/hero-sun.png";

gsap.registerPlugin(CSSPlugin);

const Hero = () => {
  /* Image animation */
  const bgRef = useRef();
  const boatRef = useRef();
  const sunRef = useRef();
  const dataRef = useRef();

  useGSAP(() => {
    gsap.from(bgRef.current, {
      opacity: 0,
      x: 400,
      duration: 5,
    });
  });

  useGSAP(() => {
    gsap.from(boatRef.current, {
      opacity: 0,
      y: 200,
      delay: 1.8,
      duration: 1.5,
      ease: "back.out(1.5)",
    });
  });

  useGSAP(() => {
    gsap.from(sunRef.current, {
      opacity: 0,
      x: 70,
      delay: 3,
      duration: 1.5,
      ease: "back.out(1.5)",
    });
  });

  useGSAP(() => {
    gsap.from(dataRef.current, {
      opacity: 0,
      y: -100,
      delay: 2.5,
      duration: 1.5,
      ease: "back.out(1.5)",
    });
  });

  /* Data animation */
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];

    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);

    if (isDeleting) {
      setDelta((preDelta) => preDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, period, text]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, tick]);

  /*=============== Connect button ===============*/
  function handleConnectBtn() {
    const connectSection = document.getElementById("connect");

    if (connectSection) {
      window.location.hash = "#connect";
      connectSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className={styles.hero} id="home">
      <img
        ref={bgRef}
        src={bg}
        alt="background"
        className={styles["hero__bg"]}
      />

      <div className={`${styles["hero__container"]} ${styles.container}`}>
        <div ref={dataRef} className={styles["hero__data"]}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animated__animated animate__fadeIn" : ""
                }
              >
                <span className={styles.tagline}>Welcome to my Portfolio</span>
                <h1>
                  <p>Hi I'm Qian Tang</p>
                  <span className={styles.wrap}> {text}</span>
                </h1>
                <p className={styles.introduction}>
                  I am a passionate developer with experience in creating
                  dynamic and responsive web applications. Feel free to explore
                  my portfolio and connect with me to discuss how we can work
                  together!
                </p>
                <button onClick={handleConnectBtn}>
                  Let's connect <ArrowRightCircle size={25} />
                </button>
              </div>
            )}
          </TrackVisibility>

          <img
            ref={sunRef}
            src={img3}
            alt="sun"
            className={styles["hero__img-3"]}
          />
        </div>

        <div className={styles["hero__images"]}>
          <img
            ref={boatRef}
            src={img2}
            alt="boat"
            className={styles["hero__img-2"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

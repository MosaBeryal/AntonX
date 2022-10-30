import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import styles from "./Home.module.css";
import person from'./images/person.jpg'

function Home() {
  return (
    <div>
      <div className={styles.Jumbotron}>
        <div className={styles.description}>
          <p className={styles.name}>-MY NAME IS</p>
          <br />
          <h1>
            Jake <span style={{ color: "#6666ff" }}>Nackos</span>
          </h1>
          <br />
          <p className={styles.intro}>
            Creative Front end developer with more than 5 years of experince in
            enterprise companies and startups, Profficient in javaScript,
            Angular and React , Passionate about UX/UI.
          </p>
          <div className={styles.social}>
            <a
              href="www.google.com"
              className="icons"
              style={{ textDecoration: "none", color: "black" }}
            >
              <BsInstagram />
            </a>{" "}
            <a
              href="www.google.com"
              className="icons"
              style={{ textDecoration: "none", color: "black" }}
            >
              <BsGithub />
            </a>{" "}
            <a
              href="www.google.com"
              className="icons"
              style={{ textDecoration: "none", color: "black" }}
            >
              <BsTwitter />
            </a>{" "}
            <a
              href="www.google.com"
              className="icons"
              style={{ textDecoration: "none", color: "black" }}
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className={styles.image}>
          <img src={person} alt="img" width="300px">
          </img>
        </div>
      </div>

    </div>
  );
}

export default Home;

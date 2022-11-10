import React from "react";
import { Button } from "react-bootstrap";
import logo from "../Images/Trustpilot.svg";
import styles from "./BodyContent.module.css";

const BodyContent = () => {
  return (
    <div>
      <div className={styles.main_div}>
        <div className={styles.heading}>
          <p>
            <span className={styles.heading_start}></span> your company.
          </p>
        </div>
        <div className={styles.paragraph_div}>
          <p>
            The simplest way for anyone to launch and run a US business.
            Incorporate your company, access one-click growth tools, stay
            compliant, and manage everything your business needs — all online,
            from anywhere.
          </p>
        </div>
        <div className={styles.contentbtn_div}>
          <div>
            <Button className={styles.btn}>Start my business</Button>
          </div>
          <div className={styles.link}>
            <a href="#">Already Incorporated?</a>
          </div>
        </div>
        <div className={styles.information}>
          <div className={styles.information_companies}>
            <p1>61237</p1>

            <p2>companies</p2>
          </div>
          <hr className={styles.v1}></hr>
          <div className={styles.reveiws}>
            <img src={logo} width="60px" alt="pilot"></img>

            <p>480 reveiws</p>
          </div>
          <hr className={styles.v1}></hr>

          <div className={styles.countries}>
            <p1>189</p1>
            <p2>countries</p2>
          </div>
        </div>
      </div>

      <div className={styles.bodyVideo}>
        <video width="700px" height="450px" autoPlay muted>
          <source src={require("../Images/video.mp4")} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default BodyContent;

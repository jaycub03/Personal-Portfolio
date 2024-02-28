import React from "react";
import styles from "./Jacob.module.css";
import { getImageUrl } from "../../utils";

export const Jacob = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jacob!</h1>
        <p className={styles.description}>
          I'm a 2nd year Computer Science Game Design student at University of California Santa Cruz. Please feel free to reach out if you have any questions at all!
        </p>
        <div className={styles.buttonGroup}>
          <a href="mailto:jacobganburged096@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="/Jacob-Ganburged-Resume.pdf"
  download="Jacob-Ganburged-Resume.pdf" /*download link for resume*/
            className={styles.contactBtn}
          >
            Download Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("jacob/jacob2.png")}
        alt="Jacob"
        className={styles.jacobImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Jacob;

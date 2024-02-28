import React from "react";

import styles from "./About.module.css";
//utility function to get images
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2> {/* Header 2 About me*/}
      <div className={styles.content}> {/*Image for picture of me*/}
        <img
          src={getImageUrl("about/jacob1.png")}
          alt="Picture of me"
          className={styles.aboutImage}
        />
        {/*create unordered list for about items*/}
        <ul className={styles.aboutItems}>
          {/*list item in ul about each topic*/}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/fullstack.png")} alt="Fullstack Icon" />
            <div className={styles.aboutItemText}>
              <h3>Fullstack Developer</h3>
              <p>
                I'm a aspiring fullstack developer with experience in building web applications using JavaScript, React, Html, and Css
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/minion.png")} alt="Minion Image" />
            <div className={styles.aboutItemText}>
              <h3>I love Minions!</h3>
              <p>
                Minions are one of my favorite things in the entire world! I have watched all the movies and aislo have some minion collectibles!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/gamer.png")} alt="UCSC Icon" />
            <div className={styles.aboutItemText}>
              <h3>Gamer</h3>
              <p>
                Some games I love to play on my free time are Valorant, League of Legends, TFT, and Fortnite.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
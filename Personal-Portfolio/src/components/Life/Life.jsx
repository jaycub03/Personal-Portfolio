import React from "react";
import styles from "./Life.module.css";
import lifeData from "../../data/life.json"; 
import {LifeCard} from "./LifeCard"; 
//pulls from json file
export const Life = () => {
  return (
    <section className={styles.container} id="life">
      <h2 className={styles.title}>Life</h2>
      <div className={styles.life}>
        {lifeData.map((project, id) => {
          return <LifeCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

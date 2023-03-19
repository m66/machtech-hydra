import React from "react";
import { TECHNOLOGIES } from "../../../constants/const";

import styles from "./techAndHWSection.module.scss";

const TechAndHWSection = () => {
  return (
    <section className={styles.techAndHWSection}>
      <div className={styles.introduction}>
        <h3>TECHNOLOGIES & HARDWARE</h3>
        <p>USED BY HYDRA VR.</p>
        <div className={styles.showDownBg}></div>
        <div className={styles.showDown}></div>
      </div>
      <div className={styles.technologies}>
        {TECHNOLOGIES.map(({ id, imgUrl }) => (
          <img
            src={require(`../../../assets/images/technologies/${imgUrl}`)}
            alt={id}
            key={id}
          />
        ))}
      </div>
    </section>
  );
};

export default TechAndHWSection;

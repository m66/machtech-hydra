import React from "react";


import img from "../../../assets/images/virtual-reality.png";
import arrow from "../../../assets/images/arrow-small-right.png";

import Button from "../../forms/Button/Button";

import styles from "./mainSection.module.scss";

const MainSection = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.infoWrapper}>
        <div className={styles.caption}>
          <h2>
            <span>Dive</span> Into The Depths
          </h2>
          <h2>
            Of <span>Virtual Reality</span>
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          quisquam illo id culpa quis excepturi vero, dignissimos nulla, eveniet
          consequuntur nihil fugit inventore odit deserunt?
        </p>
        <div className={styles.directionTo}>
          <Button btnType="primary">build your world</Button>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <div className={styles.imgBg}>
          <img src={img} alt="Virtual Reality" />
        </div>
      </div>
    </section>
  );
};

export default MainSection;

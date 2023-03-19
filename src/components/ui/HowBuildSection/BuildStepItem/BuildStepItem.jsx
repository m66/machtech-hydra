import React from "react";

import { ArrowSmallRight } from "react-swm-icon-pack";

import styles from "./buildStepItem.module.scss";

const BuildStepItem = ({ num, text }) => {
  return (
    <div className={styles.buildStepItem}>
      <div className={styles.cycleWrapper}>
        <div className={styles.cycleContent}>{num}</div>
      </div>
      <div className={styles.introduction}>
        <div className={styles.arrow}>
          <ArrowSmallRight color="#C0B7E8" size="67" />
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default BuildStepItem;

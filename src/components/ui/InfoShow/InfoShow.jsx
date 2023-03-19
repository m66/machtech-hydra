import React from "react";

import arrowIcon from "../../../assets/images/arrow-right.png";

import styles from "./infoShow.module.scss";

const InfoShow = ({ caption, subCaption, text }) => {
  return (
    <div className={styles.infoShow}>
      <div className={styles.captionWrapper}>
        <div className={styles.caption}>{caption}</div>
        <div className={styles.to}>
          <p>{subCaption}</p>
          <img src={arrowIcon} alt="------>" />
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoShow;

import React from "react";
import Button from "../../../forms/Button/Button";

import styles from "./buildItem.module.scss";

const BuildItem = ({ caption, text }) => {
  return (
    <div className={styles.buildItem}>
      <div className={styles.imgWrapper}>
        <div className={styles.imgBg}>
          <img
            src={require(`../../../../assets/images/hy-types/${caption}.png`)}
            alt={caption}
          />
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <h3>{caption}</h3>
        <p>{text}</p>
      </div>

      <div className={styles.btnWrapper}>
        <Button btnType="primary">TRY IT NOW</Button>
      </div>
    </div>
  );
};

export default BuildItem;

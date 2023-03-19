import React from "react";
import styles from "./backdrop.module.scss";

const Backdrop = ({ backdropHandler, children }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.content}>
        <span className={styles.closeBtn} onClick={backdropHandler}>X</span>
        {children}
      </div>
    </div>
  );
};

export default Backdrop;

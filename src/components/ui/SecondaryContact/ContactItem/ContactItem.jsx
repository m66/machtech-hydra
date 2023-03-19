import React from "react";

import styles from "./contactItem.module.scss";

const ContactItem = ({ iconUrl, caption, text }) => {
  return (
    <div className={styles.contactItem}>
      <div className={styles.icon}>
        <img src={require(`../../../../assets/images/${iconUrl}`)} alt="icon" />
      </div>
      <div className={styles.infoWrapper}>
        <h3 className={styles.caption}>{caption}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default ContactItem;

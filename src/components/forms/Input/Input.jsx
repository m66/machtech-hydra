import React from "react";

import styles from "./input.module.scss";

const Input = ({ elementType, errorMessage, ...defaultProps }) => {
  let inputElement = null;

  switch (elementType) {
    case "input":
      inputElement = (
        <input className={`${styles.inputElement} ${errorMessage && styles.errorBorder}`} {...defaultProps} />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={`${styles.textareaElement} ${styles.inputElement}`}
          rows="8"
          {...defaultProps}
        />
      );
      break;
    default:
      inputElement = (
        <input className={styles.inputElement} {...defaultProps} />
      );
  }

  return (
    <div className={styles.input}>
      {/* <label className={styles.label}>{label}</label> */}
      {inputElement}
      <div className={styles.errorText}>{errorMessage}</div>
    </div>
  );
};

export default Input;

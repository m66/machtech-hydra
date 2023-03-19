import React from "react";

import styles from "./button.module.scss";

const Button = ({ btnType, children, disabled, ...defaultProps }) => {
  return (
    <button
      className={`${styles.btn} ${styles[btnType]} ${
        disabled && styles.disabled
      }`}
      disabled={disabled}
      {...defaultProps}
    >
      {children}
    </button>
  );
};

export default Button;

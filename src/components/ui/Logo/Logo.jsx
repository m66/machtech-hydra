import React from "react";

import logo from "../../../assets/images/logo/logo.png";
import txt from "../../../assets/images/logo/hydra.png";

import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <img src={logo} alt="hydra-logo" className={styles.logo} />
      <img src={txt} alt="hydra" className={styles.logoName}/>
    </div>
  );
};

export default Logo;

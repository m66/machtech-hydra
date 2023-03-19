import React from "react";
import { Link } from "react-router-dom";

import burgerBtnIcon from '../../../assets/images/Burger-Button.png'
import HeaderBtns from "../HeaderBtns/HeaderBtns";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

import styles from "./header.module.scss";

const Header = ({backdropHandler}) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.btnsWrapper}>
        <HeaderBtns />
      </div>
      <div className={styles.burgerBtn}>
        <img src={burgerBtnIcon} alt="Burger Btn" onClick={backdropHandler}/>
      </div>
    </header>
  );
};

export default Header;

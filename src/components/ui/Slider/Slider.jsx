import React, { useState } from "react";

import rightArror from "../../../assets/images/right-cycle-arrow.png";
import leftArror from "../../../assets/images/left-cycle-arrow.png";

import styles from "./slider.module.scss";
import ContactItem from "../SecondaryContact/ContactItem/ContactItem";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(2);

  function handleRightArrow() {
    setCurrentIndex((prev) => {
      return slides.length - 1 === prev ? 0 : ++prev;
    });
  }

  function handleLeftArrow() {
    setCurrentIndex((prev) => {
      return prev === 0 ? slides.length - 1 : --prev;
    });
  }

  return (
    <div className={styles.slider}>
      {/* <div
        className={`${styles.sliderArrowBg} ${styles.rightArrowWrapper}`}
        onClick={handleRightArrow}
      >
        <div className={styles.sliderArrow}>
          <img src={rightArror} alt="" />
        </div>
      </div>
      <div
        className={`${styles.sliderArrowBg} ${styles.leftArrorWrapper}`}
        onClick={handleLeftArrow}
      >
        <div className={styles.sliderArrow}>
          <img src={leftArror} alt="" />
        </div>
      </div> */}
      <img
        src={rightArror}
        onClick={handleRightArrow}
        className={styles.rightArror}
        alt=""
      />
      <img
        src={leftArror}
        onClick={handleLeftArrow}
        className={styles.leftArror}
        alt=""
      />
      <div className={styles.item}>
        <ContactItem
          iconUrl={slides[currentIndex].iconUrl}
          caption={slides[currentIndex].caption}
          text={slides[currentIndex].text}
        />
      </div>
    </div>
  );
};

export default Slider;

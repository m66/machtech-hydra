import React, { useEffect, useState, Children, cloneElement } from "react";

import rightArror from "../../../assets/images/slider-right-arrow.png";
import leftArror from "../../../assets/images/slider-left-arrow.png";

import styles from "./carousel.module.scss";

const Carousel = ({ children }) => {
//   const [pages, setPages] = useState([]);
    const PAGE_WIDTH = 382;

    const slideItemStyle = {
        height: '100%',
        minWidth: `${PAGE_WIDTH}px`,
        maxWidth: `${PAGE_WIDTH}px`,
    }

//   useEffect(() => {
//     setPages(
//       Children.map(children, (child) => {
//         return cloneElement(child, {
//           style: {
//             height: "100% !important",
//             minWidth: "100% !important",
//             maxWidth: "100% !important",
//           },
//         });
//       })
//     );
//   }, []);

  function handleRightArrow() {

  }

  function handleLeftArrow() {

  }

  return (
    <div className={styles.container}>
      <div className={styles.sliderArrowBg} onClick={handleRightArrow}>
        <div className={styles.sliderArrow}>
          <img src={rightArror} alt="" />
        </div>
      </div>
      <div className={styles.sliderArrowBg} onClick={handleLeftArrow}>
        <div className={styles.sliderArrow}>
          <img src={leftArror} alt="" />
        </div>
      </div>
      <div className={styles.window}>
        <div className={styles.allPages}>{children}</div>
      </div>
    </div>
  );
};

export default Carousel;

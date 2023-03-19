import React from "react";

import img from "../../../assets/images/hydra-vr.png";
import Button from "../../forms/Button/Button";
import InfoShow from "../InfoShow/InfoShow";

import styles from "./introductionSection.module.scss";

const IntroductionSection = () => {
  return (
    <section className={styles.introductionSection}>
      <InfoShow
        caption="INTRODUCTION"
        subCaption="TO HYDRA VR"
        text="Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae."
      />
      <div className={styles.about}>
        <div className={styles.imgWrapper}>
          <img src={img} alt="hydra-vr" />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.caption}>ABOUT</div>
          <div className={styles.subCaption}>HYDRA VR</div>
          <p>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <div className={styles.buttonWrapper}>
            <Button btnType="primary">LET’S GET IN TOUCH</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;

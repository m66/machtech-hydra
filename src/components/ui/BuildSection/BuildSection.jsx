import React from "react";
import { BUILD_TYPES } from "../../../constants/const";
// import Carousel from "../Carousel/Carousel";
import InfoShow from "../InfoShow/InfoShow";
import BuildItem from "./BuildItem/BuildItem";

import styles from "./buildSection.module.scss";

const BuildSection = () => {
  return (
    <section>
      <InfoShow
        caption="WHY BUILD"
        subCaption="WITH HYDRA?"
        text="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
      />
      <div className={styles.buildes}>
        {BUILD_TYPES.map(({ id, caption, text }) => (
          <BuildItem key={id} caption={caption} text={text} />
        ))}
      </div>
    </section>
  );
};

export default BuildSection;

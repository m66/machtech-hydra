import React from "react";
import { CONTACT_ITEMS } from "../../../constants/const";
import Slider from "../Slider/Slider";
import ContactItem from "./ContactItem/ContactItem";

import styles from "./secondaryContact.module.scss";

const SecondaryContact = () => {
  return (
    <>
      <div className={styles.secondaryContact}>
        <ContactItem
          iconUrl="location.png"
          caption="Pay Us a Visit"
          text="Union St, Seattle, WA 98101, United States"
        />
        <div className={styles.line}></div>
        <ContactItem
          iconUrl="phone-call.png"
          caption="Give Us a Call"
          text="(110) 1111-1010"
        />
        <div className={styles.line}></div>
        <ContactItem
          iconUrl="mail.png"
          caption="Send Us a Message"
          text="Contact@HydraVTech.com"
        />
      </div>
      <div className={styles.slider}>
        <Slider slides={CONTACT_ITEMS} />
      </div>
    </>
  );
};

export default SecondaryContact;

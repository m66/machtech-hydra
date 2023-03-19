import React, { useState } from "react";

import { initialFormData } from "../../../constants/const";
import { validations } from "../../../helpers/validation";
import Button from "../../forms/Button/Button";

import Input from "../../forms/Input/Input";

import styles from "./contactForm.module.scss";

const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  let isDisabel = false;

  function onChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;

    onChange(e);
    setErrorMessage((prev) => {
      return {
        ...prev,
        [name]: validations[name](value),
      };
    });
  }

  for (let key in formData) {
    if (formData[key] === "" || errorMessage[key]) isDisabel = true;
  }

  function sendData(e) {
    e.preventDefault();
    /* http post -> send data to the server */
    console.log(formData);

    /* after get success response */
    setFormData(initialFormData);
  }

  return (
    <div className={styles.contactForm}>
      <h2>JOIN HYDRA</h2>
      <div className={styles.horizontalVector}></div>
      <h3>Let’s Build Your VR Experience</h3>
      <form action="">
        <div className={styles.inputGroup}>
          <Input
            elementType="input"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => handleChange(e)}
            errorMessage={errorMessage["firstName"]}
          />
          <Input
            elementType="input"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => handleChange(e)}
            errorMessage={errorMessage["lastName"]}
          />
        </div>
        <div className={styles.inputGroup}>
          <Input
            elementType="input"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            errorMessage={errorMessage["email"]}
          />
          <Input
            elementType="input"
            name="phoneNum"
            placeholder="Phone Number"
            value={formData.phoneNum}
            onChange={(e) => handleChange(e)}
            errorMessage={errorMessage["phoneNum"]}
          />
        </div>
        <Input
          elementType="input"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) => handleChange(e)}
          errorMessage={errorMessage["subject"]}
        />
        <Input
          elementType="textarea"
          name="message"
          placeholder="Tell Us Something..."
          value={formData.message}
          onChange={(e) => handleChange(e)}
          errorMessage={errorMessage["message"]}
        />
        <div className={styles.btnWrapper}>
          <Button
            btnType="primary"
            disabled={isDisabel && "disabled"}
            onClick={sendData}
          >
            SEND TO HYDRA
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

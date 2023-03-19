let required = (val) => (val ? null : "The field is required");

const nameVlaidation = (input) => {
    const regex = /^[a-z ,.'-]+$/i

    return regex.test(input) ? undefined : 'Write a correct name! [a - Z]';
}

const phoneVlaidation = (input) => {
    const regex = /^[-+]?[0-9]+$/

    return regex.test(input) ? undefined : 'Write a correct phone number! [+][0 - 9]';
}

const mailValidation = (input) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return regex.test(String(input).toLocaleLowerCase()) ? undefined : 'Must be a mail!';
}

let maxLength = (length) => (val) =>
  val.length > length ? `Input can contain maximum ${length} charackters.` : null;

let minLength = (length) => (val) =>
  val.length < length ? `Input can contain minimum ${length} charackters.` : null;

let createValidation = (validations) => (val) => {
  for (let validation of validations) {
    
    const error = validation(val);
    if (error) {
      return error;
    }
  }

  return "";
};

export const validations = {
    firstName: createValidation([required, minLength(4), maxLength(36), nameVlaidation]),
    lastName: createValidation([required, minLength(4), maxLength(36), nameVlaidation]),
    email: createValidation([required, mailValidation]),
    phoneNum: createValidation([required, phoneVlaidation]),
    subject: createValidation([required, maxLength(24)]),
    message: createValidation([required]),
}
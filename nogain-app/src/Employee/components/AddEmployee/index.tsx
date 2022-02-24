import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

import whiteCross from "../../../assets/icons/whiteCross.svg";
import blueCross from "../../../assets/icons/blueCross.svg";

import { validName } from "../../../util/validName";
import { validEmail } from "../../../util/validEmail";
import { validCNI } from "../../../util/validCNI";

type propsType = {
  onClose: () => void;
};

export const AddEmployee = (props: propsType) => {
  const [isHover, setHover] = useState(false);

  // Name
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsNotEmpty = enteredName.trim() !== "";
  const enteredNameIsValid = validName(enteredName);
  const nameInputIsInvalid = !enteredNameIsNotEmpty && enteredNameTouched;
  const nameIsValid =
    !enteredNameTouched || (enteredNameIsValid && enteredNameIsNotEmpty);
  // Email
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsNotEmpty = enteredEmail.trim() !== "";
  const enteredEmailIsValid = validEmail(enteredEmail);
  const emailInputIsInvalid = !enteredEmailIsNotEmpty && enteredEmailTouched;

  const emailIsValid =
    !enteredEmailTouched || (enteredEmailIsValid && enteredEmailIsNotEmpty);

  // Telephone

  const [enteredTelephone, setEnteredTelephone] = useState("");
  const [enteredTelephoneTouched, setEnteredTelephoneTouched] = useState(false);
  const enteredTelephoneIsNotEmpty = enteredTelephone.trim() !== "";
  const enteredTelephoneIsValid = validEmail(enteredTelephone);
  const telephoneInputIsInvalid =
    !enteredTelephoneIsNotEmpty && enteredTelephoneTouched;

  const telephoneIsValid =
    !enteredTelephoneTouched ||
    (enteredTelephoneIsValid && enteredTelephoneIsNotEmpty);

  // CNI
  const [enteredCNI, setEnteredCNI] = useState("");
  const [enteredCNITouched, setEnteredCNITouched] = useState(false);
  const enteredCNIIsNotEmpty = enteredCNI.trim() !== "";
  const enteredCNIIsValid = validCNI(enteredCNI.toUpperCase());
  const cniInputIsInvalid = !enteredCNIIsNotEmpty && enteredCNITouched;

  const cniInputIsValid =
    !enteredCNITouched || (enteredCNIIsValid && enteredCNIIsNotEmpty);

  // form validation
  const FormIsValid =
    nameIsValid && emailIsValid && telephoneIsValid && enteredCNIIsValid; // function is not good enough

  // name input
  const nameInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  // email input
  const emailInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  // telephone input
  const telephoneInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // if (typeof event.target.value === "number") {
    setEnteredTelephone(event.target.value);
    // }
  };

  const telephoneInputBlurHandler = () => {
    setEnteredTelephoneTouched(true);
  };

  const cniInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredCNI(event.target.value);
  };

  const cniInputBlurHandler = () => {
    setEnteredCNITouched(true);
  };

  const hoverHandler = () => {
    setHover(true);
  };

  const leaveHandler = () => {
    setHover(false);
  };

  const formRegisterEmployeeHandler = (event: React.FormEvent) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredTelephoneTouched(true);
    setEnteredCNITouched(true);

    if (nameInputIsInvalid) {
      return;
    }

    if (emailInputIsInvalid) {
      return;
    }

    if (telephoneInputIsInvalid) {
      return;
    }

    if (cniInputIsInvalid) {
      return;
    }

    if (FormIsValid) {
      if (
        enteredNameIsNotEmpty &&
        enteredEmailIsNotEmpty &&
        enteredTelephoneIsNotEmpty
      ) {
        //   if (enteredName.length > 10) {
        console.log({
          name: enteredName,
          email: enteredEmail,
          dataCreated: new Date(),
        });

        setEnteredName("");
        setEnteredEmail("");
        setEnteredTelephone("");
        setEnteredCNI("");
        setEnteredNameTouched(false);
        setEnteredEmailTouched(false);
        setEnteredTelephoneTouched(false);
        setEnteredCNITouched(false);
        //     }
      }
    }
  };

  const iconChange = !isHover ? whiteCross : blueCross;

  const nameEnteredController = nameIsValid ? ` ` : `  ${styles.invalidInput}`;

  const emailEnteredController = emailIsValid
    ? ` `
    : `  ${styles.invalidInput}`;

  // const emailEnteredController =

  const telephoneEnteredController = telephoneIsValid
    ? ` `
    : `  ${styles.invalidInput}`;

  const cniEnteredController = cniInputIsValid
    ? ` `
    : `  ${styles.invalidInput}`;

  return (
    <div className={styles.addEmployeeContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.left}>
          <h1>Inscrição do Funcionario</h1>
        </div>
        <button
          className={styles.right}
          onMouseEnter={hoverHandler}
          onMouseLeave={leaveHandler}
          onClick={props.onClose}
        >
          <img src={iconChange} alt="close" />
        </button>
      </div>

      <form
        onSubmit={formRegisterEmployeeHandler}
        className={styles.formContainer}
      >
        <div className={styles.inputContainer}>
          <label>Nome Completo</label>
          <input
            className={nameEnteredController}
            value={enteredName}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            type="text"
            placeholder="Insira o seu nome completo"
          />
        </div>
        <div className={styles.twoinputrow}>
          <div className={styles.inputContainer}>
            <label>Email</label>
            <input
              className={emailEnteredController}
              value={enteredEmail}
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
              type="email"
              placeholder="Insira o seu email"
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Telemóvel</label>
            <input
              className={telephoneEnteredController}
              onBlur={telephoneInputBlurHandler}
              onChange={telephoneInputChangeHandler}
              type="tel"
              placeholder="Insira o seu numero de telemóvel"
            />
          </div>
        </div>
        <div className={styles.twoinputrow}>
          <div className={styles.inputContainer}>
            <label>CNI</label>
            <input
              className={cniEnteredController}
              onBlur={cniInputBlurHandler}
              onChange={cniInputChangeHandler}
              type="text"
              placeholder="Insira o seu CNI"
            />
          </div>
          <div className={styles.inputContainer}>
            <label>NIF</label>
            <input type="text" />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Data de Nascimento</label>
          <input type="date" />
        </div>

        <button className={styles.btnSubmit}>Inscrever</button>
      </form>
    </div>
  );
};

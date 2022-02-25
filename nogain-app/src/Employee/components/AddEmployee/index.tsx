import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

import whiteCross from "../../../assets/icons/whiteCross.svg";
import blueCross from "../../../assets/icons/blueCross.svg";

import { useInput } from "../../../shared/hooks/useInput";

import { validName } from "../../../util/validName";
import { validEmail } from "../../../util/validEmail";
import { validCNI } from "../../../util/validCNI";
import { validPhoneNumber } from "../../../util/validPhoneNumber";
import { validNIF } from "../../../util/validNIF";
import { validBirth } from "../../../util/validBirth";

type propsType = {
  onClose: () => void;
};

type useInput = {
  enteredValue: string;
  enteredValueTouched: boolean;

  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
};

export const AddEmployee = (props: propsType) => {
  const [isHover, setHover] = useState(false);

  // const {
  //   value: enteredName,
  //   touch: enteredNameTouched,
  //   valueInputChangeHandler: nameInputChangeHandler,
  //   valueInputBlurHandler: nameInputBlurHandler,
  // } = useInput(validName);

  // state Name
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsNotEmpty = enteredName.trim() !== "";
  const enteredNameIsValid = validName(enteredName);
  const nameInputIsInvalid = !enteredNameIsNotEmpty && enteredNameTouched;
  const nameIsValid =
    !enteredNameTouched || (enteredNameIsValid && enteredNameIsNotEmpty);
  // state Email
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsNotEmpty = enteredEmail.trim() !== "";
  const enteredEmailIsValid = validEmail(enteredEmail);
  const emailInputIsInvalid = !enteredEmailIsNotEmpty && enteredEmailTouched;

  const emailIsValid =
    !enteredEmailTouched || (enteredEmailIsValid && enteredEmailIsNotEmpty);

  // state Telephone

  const [enteredTelephone, setEnteredTelephone] = useState("");
  const [enteredTelephoneTouched, setEnteredTelephoneTouched] = useState(false);
  const enteredTelephoneIsNotEmpty = enteredTelephone.trim() !== "";
  const enteredTelephoneIsValid = validPhoneNumber(enteredTelephone);
  const telephoneInputIsInvalid =
    !enteredTelephoneIsNotEmpty && enteredTelephoneTouched;

  const telephoneIsValid =
    !enteredTelephoneTouched ||
    (enteredTelephoneIsValid && enteredTelephoneIsNotEmpty);

  // state CNI
  const [enteredCNI, setEnteredCNI] = useState("");
  const [enteredCNITouched, setEnteredCNITouched] = useState(false);
  const enteredCNIIsNotEmpty = enteredCNI.trim() !== "";
  const enteredCNIIsValid = validCNI(enteredCNI.toUpperCase());
  const cniInputIsInvalid = !enteredCNIIsNotEmpty && enteredCNITouched;

  const cniIsValid =
    !enteredCNITouched || (enteredCNIIsValid && enteredCNIIsNotEmpty);

  // state NiF
  const [enteredNIF, setEnteredNIF] = useState("");
  const [enteredNIFTouched, setEnteredNIFTouched] = useState(false);
  const enteredNIFIsNotEmpty = enteredNIF.trim() !== "";
  const enteredNIFIsValid = validNIF(enteredNIF.toUpperCase());
  const nifInputIsInvalid = !enteredNIFIsNotEmpty && enteredNIFTouched;
  const nifIsValid =
    !enteredNIFTouched || (enteredNIFIsNotEmpty && enteredNIFIsValid);

  // state date
  const [enteredBirth, setEnteredBirth] = useState("");
  const [enteredBirthTouched, setEnteredBirthTouched] = useState(false);
  const enteredBirthIsNotEmpty = enteredBirth.trim() !== "";
  // const enteredBirthIsValid = validBirth(enteredBirth.slice());
  const birthInputIsInvalid = !enteredBirthIsNotEmpty && enteredBirthTouched;
  const birthIsValid = !enteredBirthTouched || enteredBirthIsNotEmpty;


  // form validation
  const FormIsValid =
    nameIsValid && emailIsValid && telephoneIsValid && enteredCNIIsValid; // function is not good enough

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

  // cni input
  const cniInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredCNI(event.target.value);
  };

  const cniInputBlurHandler = () => {
    setEnteredCNITouched(true);
  };

  // nif input
  const nifInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredNIF(event.target.value);
  };

  const nifInputBlurHandler = () => {
    setEnteredNIFTouched(true);
  };

  // Birth input
  const birthInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredBirth(event.target.value);
  };
  const birthInputBlurHandler = () => {
    setEnteredBirthTouched(true)
  }


  // Close Button


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
    setEnteredNIFTouched(true);
    setEnteredBirthTouched(true);

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

    if (nifInputIsInvalid) {
      return;
    }

    if (FormIsValid) {
      if (
        enteredNameIsNotEmpty &&
        enteredEmailIsNotEmpty &&
        enteredTelephoneIsNotEmpty &&
        enteredCNIIsNotEmpty &&
        enteredNIFIsNotEmpty
      ) {
        //   if (enteredName.length > 10) {
        console.log({
          name: enteredName,
          email: enteredEmail,
          telephone: enteredTelephone,
          cni: enteredCNI,
          nif: enteredNIF,
          birth: enteredBirth,
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

  const telephoneEnteredController = telephoneIsValid
    ? ` `
    : `  ${styles.invalidInput}`;

  const cniEnteredController = cniIsValid ? ` ` : `  ${styles.invalidInput}`;

  const nifEnteredController = nifIsValid ? ` ` : `  ${styles.invalidInput}`;

  const birthEnteredController = birthIsValid ? ` ` : `  ${styles.invalidInput}`;

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
            placeholder="Insira o nome completo"
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
              placeholder="Insira o email"
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Telemóvel</label>
            <input
              className={telephoneEnteredController}
              onBlur={telephoneInputBlurHandler}
              onChange={telephoneInputChangeHandler}
              type="tel"
              placeholder="Insira o numero de telemóvel"
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
            <input
              className={nifEnteredController}
              onBlur={nifInputBlurHandler}
              onChange={nifInputChangeHandler}
              type="text"
              placeholder="Insira o seu NIF"
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Data de Nascimento</label>
          <input
          className={birthEnteredController}
          onBlur={birthInputBlurHandler}
          onChange={birthInputChangeHandler}
          type="date" 
          placeholder="Insira a data de nascimento"
          />
        </div>

        <button className={styles.btnSubmit}>Inscrever</button>
      </form>
    </div>
  );
};

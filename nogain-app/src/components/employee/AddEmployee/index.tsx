import React, { useState } from "react";

import styles from "./styles.module.scss";

import whiteCross from "../../../assets/icons/whiteCross.svg";
import blueCross from "../../../assets/icons/blueCross.svg";

import { validName } from "../../../util/validName";

export const AddEmployee = () => {
  const [isHover, setHover] = useState(false);

  const [enteredName, setEnteredName] = useState("");
  // const [isNameValid, setNameValid] = useState();

  const nameInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let isValid = validName.test(event.target.value);

    if (isValid) {
      setEnteredName(event.target.value);
    }
  };

  const hoverHandler = () => {
    setHover(true);
  };

  const leaveHandler = () => {
    setHover(false);
  };

  const iconChange = !isHover ? whiteCross : blueCross;

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
        >
          {/* <button>Close</button> */}
          <img src={iconChange} alt="close" />
        </button>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <label>Nome Completo</label>
          <input
            value={enteredName}
            onChange={nameInputChangeHandler}
            type="text"
          />
        </div>
        <div className={styles.twoinputrow}>
          <div className={styles.inputContainer}>
            <label>Email</label>
            <input type="email" />
          </div>
          <div className={styles.inputContainer}>
            <label>Telemóvel</label>
            <input type="tel" />
          </div>
        </div>
        <div className={styles.twoinputrow}>
          <div className={styles.inputContainer}>
            <label>CNI</label>
            <input type="text" />
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
      </div>
    </div>
  );
};

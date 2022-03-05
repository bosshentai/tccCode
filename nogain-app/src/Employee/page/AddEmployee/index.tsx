import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

import whiteCross from "../../../assets/icons/whiteCross.svg";
import blueCross from "../../../assets/icons/blueCross.svg";

import { InputText } from "../../../shared/components/FormElements/InputText";
import { useForm } from "../../../shared/hooks/form-hook";

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

  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      tel: {
        value: "",
        isValid: false,
      },
      cni:{
        value: "",
        isValid: false,
      },
      nif:{
        value: "",
        isValid: false,
      },
      birth:{
        value: "",
        isValid: false,
      }
    },
    false
  );

  // Close Button

  const hoverHandler = () => {
    setHover(true);
  };

  const leaveHandler = () => {
    setHover(false);
  };

  const formRegisterEmployeeHandler = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("in The form");
    console.table(formState.inputs);
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
          onClick={props.onClose}
        >
          <img src={iconChange} alt="close" />
        </button>
      </div>

      <form
        onSubmit={formRegisterEmployeeHandler}
        className={styles.formContainer}
      >
        <InputText
          type="text"
          id="name"
          label="Nome Completo"
          placeHolder="Insira o nome completo"
          onInput={inputHandler}
        />
        <div className={styles.twoinputrow}>
          <InputText
            type="email"
            id="email"
            label="Email"
            placeHolder="Insira o email"
            onInput={inputHandler}
          />
          <InputText
            type="tel"
            id="tel"
            label="Telemóvel"
            placeHolder="Insira o email"
            onInput={inputHandler}
          />
        </div>
        <div className={styles.twoinputrow}>
          <InputText
            type="text"
            id="CNI"
            label="CNI"
            placeHolder="Insira o CNI"
            onInput={inputHandler}
          />
          <InputText
            type="text"
            id="NIF"
            label="NIF"
            placeHolder="Insira o NIF"
            onInput={inputHandler}
          />
        </div>
        <InputText
          type="date"
          id="birth"
          label="Data de Nascimento"
          placeHolder="dd/mm/yyyy"
          onInput={inputHandler}
        />

        <button className={styles.btnSubmit}>Inscrever</button>
      </form>
    </div>
  );
};

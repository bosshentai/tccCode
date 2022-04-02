import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

import whiteCross from "../../../assets/icons/whiteCross.svg";
import blueCross from "../../../assets/icons/blueCross.svg";

import { InputText } from "../../../shared/components/FormElements/InputText";
import { useForm } from "../../../shared/hooks/form-hook";
import { ErrorPopup } from "../../../shared/components/UIElements/ErrorPopup";
import axios from "axios";
// import { useHttpClient } from "../../../shared/hooks/http-hook";

type propsType = {
  onClose: () => void;
};


export const AddEmployee = (props: propsType) => {
  const [isHover, setHover] = useState(false);

  const [showError, setShowError] = useState(false);

  // const { sendRequest } = useHttpClient();

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
      cni: {
        value: "",
        isValid: false,
      },
      nif: {
        value: "",
        isValid: false,
      },
      birth: {
        value: "",
        isValid: false,
      },
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

  const formRegisterEmployeeHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const urlPath = "http://localhost:5000/api/employee/add";

    if (formState.isValid === true) {
      const formData = {
        name: formState.inputs.name.value,
        email: formState.inputs.email.value,
        phone: formState.inputs.tel.value,
        CNI: formState.inputs.cni.value,
        NIF: formState.inputs.nif.value,
        birth: formState.inputs.birth.value,
      };

      try {
        // await fetch("http://localhost:4003/api/employee/add", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(formData),
        // });
        const response = await axios.post(urlPath, formData);
        props.onClose();
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("invalid form");
      setShowError(true);
    }
  };

  const iconChange = !isHover ? whiteCross : blueCross;

  const closeErrorHandler = () => {
    setShowError(false);
  }

  return (
    <>
      {showError && <ErrorPopup onClose={closeErrorHandler}/>}

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
          data-testid="form"
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
              id="cni"
              label="cni"
              placeHolder="Insira o CNI"
              onInput={inputHandler}
            />
            <InputText
              type="text"
              id="nif"
              label="nif"
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

          <button data-testid="button" className={styles.btnSubmit}>
            Inscrever
          </button>
        </form>
      </div>
    </>
  );
};

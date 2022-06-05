import React, { useState } from "react";
import styles from "./styles.module.scss";

import { InputText } from "../../../shared/components/FormElements/InputText";
import { useForm } from "../../../shared/hooks/form-hook";

import whiteCross from "../../../../assets/icons/whiteCross.svg";
import blueCross from "../../../../assets/icons/blueCross.svg";
import axios from "axios";


type propsType = {
  onnClose: () => void;
}

const InitialInputs = {
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
  CNI: {
    value: "",
    isValid: false,
  },
  NIF: {
    value: "",
    isValid: false,
  },
  birth: {
    value: "",
    isValid: false,
  },
};

export const AddPersonalTrainer = (props: propsType) => {
  const [isHover, setHover] = useState(false);

  const [showError, setShowError] = useState(false);

  const [formState, inputHandler] = useForm(InitialInputs, false);

  const hoverHandler = () => {
    setHover(true);
  };

  const leaveHandler = () => {
    setHover(false);
  };

  const closeErrorHandler = () => {
    setShowError(false);
  }

  const formRegisterPersonalTrainer = async (event: React.FormEvent) => {
    event.preventDefault();

  // missing the urlPatch for the backend add the PersonalTrainer

    if (formState.isValid === true){
      const formData = {
        name: formState.inputs.name.value,
        email: formState.inputs.email.value,
        tel: formState.inputs.tel.value,
        CNI: formState.inputs.cni.value,
        NIF: formState.inputs.nif.value,
        birth: formState.inputs.birth.value,
      }


      try{

        // await axios.post(url, formData);

        props.onClose();

      } catch(err){
        console.log(err);
      }
    } else {
      setShowError(true);
    }

  }

  const iconChange = !isHover ? whiteCross : blueCross;

  


  return (
    <div className={styles.addPersonalTrainerContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.left}>
          <h1>Registrar Personal Trainer</h1>
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

      <form className={styles.formContainer}>
        <InputText
          type="text"
          id="name"
          label="Nome Completo"
          placeHolder="Insira o nome completo"
          onInput={inputHandler}
        />
        <div className={styles.twoInputInRow}>
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
            placeHolder="Insira o numero do telemóvel"
            onInput={inputHandler}
          />
        </div>
        <div className={styles.twoInputInRow}>
          <InputText
            type="text"
            id="cni"
            label="CNI"
            placeHolder="Insira o CNI"
            onInput={inputHandler}
          />
          <InputText
            type="text"
            id="nif"
            label="NIF"
            placeHolder="Insira o NIF"
            onInput={inputHandler}
          />
        </div>

        <InputText
          type="date"
          id="date"
          label="Data de Nascimento"
          placeHolder="dd/mm/yyyy"
          onInput={inputHandler}
        />
        <button className={styles.btnSubmit}>Registar</button>
      </form>
    </div>
  );
};

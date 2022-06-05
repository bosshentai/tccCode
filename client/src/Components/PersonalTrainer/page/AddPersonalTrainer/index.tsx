import { useState } from "react";
import styles from "./styles.module.scss";

import { InputText } from "../../../shared/components/FormElements/InputText";
import { useForm } from "../../../shared/hooks/form-hook";

import whiteCross from "../../../../assets/icons/whiteCross.svg";
import blueCross from "../../../../assets/icons/blueCross.svg";

export const AddPersonalTrainer = () => {
  const [isHover, setHover] = useState(false);

  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const hoverHandler = () => {
    setHover(true);
  };

  const leaveHandler = () => {
    setHover(false);
  };

  const iconChange = !isHover ? whiteCross : blueCross;

  return (
    <div className={styles.addPersonalTrainerContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.left}>
          <h1>Registrar Personal Trainer</h1>
        </div>
        <button className={styles.right} onMouseEnter={hoverHandler}>
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
        <div className={styles.twoInputInRow}></div>
      </form>
    </div>
  );
};

import { useRef, useState } from "react";
import styles from "./styles.module.scss";

import whiteCross from "../../../../assets/icons/whiteCross.svg";
import blueCross from "../../../../assets/icons/blueCross.svg";
import { validName } from "../../../shared/util/validName";

type propsType = {
  onClose: () => void;
};

export const AddDiscount = (props: propsType) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const areaInputRef = useRef<HTMLTextAreaElement>(null);
  const amountInputRef = useRef();

  const [isHover, setHover] = useState(false);

  const [isNameOk, setIsNameOk] = useState(true);

  const hoverHandler = () => {
    setHover(true);
  };

  const leaveHandler = () => {
    setHover(false);
  };

  const formRegisterDiscountHandler = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // console.log(areaInputRef.current!.value);

    // Name
    const enteredName = nameInputRef.current!.value;
    const nameIsNotEmpty = enteredName.trim().length !== 0;
    const nameIsValid = validName(enteredName);
    // mínimo 6 letras

    const nameIsOk = nameIsNotEmpty && nameIsValid;

    // Description
    const enteredDescription = areaInputRef.current!.value;
    const descriptionIsNotEmpty = enteredDescription.trim().length !== 0;

    // console.log("Name is not empty: " + nameIsNotEmpty);
    // console.log("Name is valid: " + nameIsValid);

    if (!nameIsOk) {
      setIsNameOk(false);

      return;

      // alert("Nome inválido");
      // return;
    }

    if (nameIsOk && descriptionIsNotEmpty) {
      setIsNameOk(true);

      // console.log(enteredName);

      console.log("Discount added");
      // props.onClose();
    }
  };

  const iconChange = !isHover ? whiteCross : blueCross;

  const nameControllerClass = isNameOk
    ? `${styles.nameValid}`
    : `${styles.nameInvalid}`;

  return (
    <div className={styles.addDiscountContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.left}>
          <h1>Registrar Desconto</h1>
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
      {/* Form  */}
      <form
        onSubmit={formRegisterDiscountHandler}
        className={styles.formContainer}
      >
        <div>
          <label>Nome</label>
          <input
            type="text"
            ref={nameInputRef}
            className={nameControllerClass}
          />
        </div>
        {/* <InputText
        type="text"
        id="name"
        label="Nome"
        placeHolder="Insira o nome"
        onInput={inputHandler}
      /> */}
        <div>
          <label>Descrição</label>
          <textarea ref={areaInputRef} />
        </div>
        <div>
          <label>Montante</label>
          <input type="text" />
        </div>

        <button className={styles.btnSubmit}>Registrar</button>
      </form>
    </div>
  );
};

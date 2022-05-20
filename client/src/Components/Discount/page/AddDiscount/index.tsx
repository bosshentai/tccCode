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
  // const areaINputRef = useRef();
  // const amountInputRef = useRef();

  const [isHover, setHover] = useState(false);

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

    // console.log(nameInputRef.current!.value);

    const enteredName = nameInputRef.current!.value;

    const nameIsNotEmpty = enteredName.trim().length !== 0;
    const nameIsValid = validName(enteredName);
    // minimo 6 letras


    console.log("Name is not empty: " + nameIsNotEmpty);
    console.log("Name is valid: " + nameIsValid);


    // if (nameIsEmpty || !nameIsValid) {
    //   return;
    // }


    // if(enteredName.trim().length === 0) {
    //   console.log('Name is empty');
    // }


    // const formData = new FormData();
    // console.log("Form submitted");
  };

  const iconChange = !isHover ? whiteCross : blueCross;

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
          ref={nameInputRef} />
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
          <textarea />
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

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
  const amountInputRef = useRef<HTMLInputElement>(null);

  const [isHover, setHover] = useState(false);

  const [isNameOk, setIsNameOk] = useState(true);
  const [isNumberOk, setIsNumberOk] = useState(true);

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

    // Amount
    const enteredAmount = amountInputRef.current!.value;
    const amountIsNotEmpty = enteredAmount.trim().length !== 0;


    console.log("Amount is not empty: " + amountIsNotEmpty);
    console.log(" Entered amount: " + enteredAmount);
    // const amountIsValid = isNaN(Number(enteredAmount));

    const amountIsOk = amountIsNotEmpty;

    if (!nameIsOk) {
      setIsNameOk(false);


    }

    if (!amountIsOk) {
      setIsNumberOk(false);

    }

    if (nameIsOk && amountIsOk) {
      setIsNameOk(true);
      setIsNumberOk(true);

      console.log( "Nome do Desconto " + enteredName);
      console.log("A Descrição :" + enteredDescription);
      console.log("O valor: " + enteredAmount);

      console.log("Discount added");
      // props.onClose();
    }

    return;
  };

  const iconChange = !isHover ? whiteCross : blueCross;

  const nameControllerClass = isNameOk
    ? `${styles.nameValid}`
    : `${styles.nameInvalid}`;

  const numberControllerClass = isNumberOk
    ? `${styles.numberValid}`
    : `${styles.numberInvalid}`;

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
            placeholder="Insira o nome de Desconto"
            className={nameControllerClass}
          />
        </div>

        <div>
          <label>Descrição</label>
          <textarea ref={areaInputRef} />
        </div>
        <div>
          <label>Montante</label>
          <input
            className={numberControllerClass}
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            ref={amountInputRef}
          />
        </div>

        <button className={styles.btnSubmit}>Registrar</button>
      </form>
    </div>
  );
};

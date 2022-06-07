

import { useRef, useState } from "react";
import styles from "./styles.module.scss";

import whiteCross from "../../../../assets/icons/whiteCross.svg";
import blueCross from "../../../../assets/icons/blueCross.svg";
import { validName } from "../../../shared/util/validName";


export const AddTrainingPlan = () => {

  const nameInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const [isHover, setHover] = useState(false);

  const [isNameOk,setIsNameOk] = useState(true);

  const hoverHandler = () => {
    setHover(true);
  }

  const leaveHandler = () => {
    setHover(false);
  }


  const formRegisterTrainingPlan = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const enteredName = nameInputRef.current!.value;
      const nameIsNotEmpty = enteredName.trim().length !== 0;
      const nameIsValid = validName(enteredName);


      const nameIsOk = nameIsNotEmpty && nameIsValid;



      if(!nameIsOk){
       
        setIsNameOk(false);
      }


      


  }


  const iconChange = !isHover ? whiteCross : blueCross;

  const nameControllerClass = isNameOk ? `${styles.isValid}` : `${styles.isInValid}`;


  return <div className={styles.addTrainingPlanContainer}>
    <div className={styles.headerContainer}>
      <div className={styles.left}>
        <h1>Registar Plano de Treino</h1>
      </div>
      <button
        className={styles.right}
        onMouseEnter={hoverHandler}
        onMouseLeave={leaveHandler}
      // onClick={props.onClose}
      >
        <img src={iconChange} alt="close" />
      </button>
    </div>
    <form
      onSubmit={formRegisterTrainingPlan}
      className={styles.formContainer}
    >
      <div>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Insira o nome do Plano de Treino"
          className={nameControllerClass}
          ref={nameInputRef}
        />
      </div>
      <div>
        <label>Descrição</label>
        <textarea
        ref={descriptionInputRef}
        />
      </div>
      <div>
        <label>Montante</label>
        <input
        type="number"
        placeholder="Insira o montante"
        onWheel={(event) => event.currentTarget.blur()}
        ref={amountInputRef}
        />
      </div>

      <button className={styles.btnSubmit}>Registrar</button>
    </form>
  </div>;
}
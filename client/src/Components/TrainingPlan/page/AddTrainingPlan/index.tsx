

import { useRef, useState } from "react";
import styles from "./styles.module.scss";

import whiteCross from "../../../../assets/icons/whiteCross.svg";
import blueCross from "../../../../assets/icons/blueCross.svg";
import { validName } from "../../../shared/util/validName";
import axios from "axios";


export const AddTrainingPlan = () => {

  const nameInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const [isHover, setHover] = useState(false);

  const [isNameOk,setIsNameOk] = useState(true);
  const [isAmountOk,setIsAmountOk] = useState(true);

  const hoverHandler = () => {
    setHover(true);
  }

  const leaveHandler = () => {
    setHover(false);
  }


  const formRegisterTrainingPlan = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const enteredName = nameInputRef.current!.value;
      const nameIsNotEmpty = enteredName.trim().length !== 0;
      // const nameIsValid = validName(enteredName);

      const nameIsOk = nameIsNotEmpty ;


      const enteredDescription = descriptionInputRef.current!.value;


      const enteredAmount = amountInputRef.current!.value;
      const amountIsNotEmpty = enteredAmount.trim().length !== 0;
      const amountIsValid = Number(enteredAmount); // verificar se e 1 number

      const amountIsOk = amountIsNotEmpty && amountIsValid;






      if(!nameIsOk){
       
        setIsNameOk(false);
      }

      if(!amountIsOk){
        setIsAmountOk(false);
      }


      if (nameIsOk && amountIsOk){
        setIsAmountOk(true);
        setIsNameOk(true)

        // console.log("Nome do Plano de Treino: " +  enteredAmount);
        // console.log("Descrição do Plano de Treino" + enteredDescription);
        // console.log("Montante:" + enteredAmount);

        const urlPatch = "http://localhost:5000/api/trainingplan/add";

        const formData = {
          name: enteredName,
          description: enteredDescription,
          value: enteredAmount
        }

        try {

          await axios.post(urlPatch,formData)
          
        } catch (error) {
          console.log(error)
        }




      }

      


  }


  const iconChange = !isHover ? whiteCross : blueCross;

  const nameControllerClass = isNameOk ? `${styles.isValid}` : `${styles.isInValid}`;

  const amountControllerClass = isAmountOk ? `${styles.isValid}` : `${styles.isInValid}`


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
        className={amountControllerClass}
        ref={amountInputRef}
        />
      </div>

      <button className={styles.btnSubmit}>Registrar</button>
    </form>
  </div>;
}
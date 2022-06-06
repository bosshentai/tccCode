import { useState } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../../../shared/components/UIElements/Backdrop";
import { DefaultPage } from "../../../shared/components/UIElements/DefaultPage";
import { AddPersonalTrainer } from "../AddPersonalTrainer";

import styles from "./styles.module.scss";

const portalElement = document.getElementById("overlays") as HTMLElement;

type personalTrainer = {
  id: string;
  name: string;
}

const DUMMY_DATA = [
  {
    id: "1asadas",
    name: "Hernâni",

  },
  {
    id: "2assad",
    name: "Hern",
  }
]

export const PersonalTrainer = () => {
  const [listEmpty, setListEmpty] = useState(true);

  const [addPersonalTrainerIsShow, setPersonalTrainerIsShow] = useState(false);

  const [ listPersonalTrainer,setListPersonalTrainer] = useState<personalTrainer[]>([])


  const showAddPersonalTrainerHandler = () => {
    setPersonalTrainerIsShow(true);
  }


  const closeAddPersonalTrainerHandler = () => {
    setPersonalTrainerIsShow(false);
  }

  return (
   <> 
   {
     addPersonalTrainerIsShow &&
     ReactDOM.createPortal(
     <>
      <Backdrop onClose={closeAddPersonalTrainerHandler}/>
      <AddPersonalTrainer onClose={closeAddPersonalTrainerHandler}/>
     </>,portalElement)

   }
    <DefaultPage>
      {listEmpty && <p className={styles.p}>Sem Personal Trainer</p>}
      {!listEmpty && 
      <div className={styles.tableContainer}>
        <div className={styles.header}>
          <div className={styles.title}>
            <p>Nome</p>
          </div>
          <div className={styles.title}>
            <p>Email</p>
          </div>
        </div>
      </div>
      }
      <div className={styles.btnContainer}>
        <button onClick={showAddPersonalTrainerHandler}>
          <p>Adicionar Personal Trainer</p>
        </button>
      </div>
    </DefaultPage>
    </>
  );
};

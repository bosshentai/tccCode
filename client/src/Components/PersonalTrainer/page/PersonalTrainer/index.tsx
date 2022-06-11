import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../../../shared/components/UIElements/Backdrop";
import { DefaultPage } from "../../../shared/components/UIElements/DefaultPage";
import { PersonalTrainerList } from "../../Components/PersonalTrainerList";
import { AddPersonalTrainer } from "../AddPersonalTrainer";

import styles from "./styles.module.scss";

const portalElement = document.getElementById("overlays") as HTMLElement;

type personalTrainer = {
  id: string;
  name: string;
  email: string;
}

const DUMMY_DATA = [
  {
    id: "1asadas",
    name: "Hernâni",
    email: "baptista@got.com"

  },
  {
    id: "2assad",
    name: "Hern",
    email: "asdada@asdsd.com"
  }
]

export const PersonalTrainer = () => {
  const [listEmpty, setListEmpty] = useState(true);

  const [addPersonalTrainerIsShow, setPersonalTrainerIsShow] = useState(false);

  const [ listPersonalTrainer,setListPersonalTrainer] = useState<personalTrainer[]>([])


  useEffect( () => {

    setListPersonalTrainer(DUMMY_DATA);

    if (listPersonalTrainer.length === 0){
      setListEmpty(true);
    }else{
      setListEmpty(false);
    }
    
  },[listPersonalTrainer])


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
        <PersonalTrainerList personalTrainers={listPersonalTrainer}/>
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

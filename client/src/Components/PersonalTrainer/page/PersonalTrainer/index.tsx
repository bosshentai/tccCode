import { useState } from "react";
import { Backdrop } from "../../../shared/components/UIElements/Backdrop";
import { DefaultPage } from "../../../shared/components/UIElements/DefaultPage";
import { AddPersonalTrainer } from "../AddPersonalTrainer";

import styles from "./styles.module.scss";

// type personalTrainer = {
//   id: string;
//   name: string;
//   // email: string;
//   // describe: string;
//   amount: string;

// }

// const DUMMY_DATA = [
//   {
//     id: "1asadas",
//     name: "Hernâni",
//     // email: "
//     // describe: "
//     amount: "100,00",
//   },
//   {
//     id: "2assad",
//     name: "Hern",
//   }
// ]

export const PersonalTrainer = () => {
  const [listEmpty, setListEmpty] = useState(true);

  const [addPersonalTrainerIsShow, setPersonalTrainerIsShow] = useState(false);

  // const [ listPersonalTrainer,setListPersonalTrainer] = useState<personalTrainer[]>([])


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
     <>
      <Backdrop onClose={closeAddPersonalTrainerHandler}/>
      <AddPersonalTrainer onClose={closeAddPersonalTrainerHandler}/>
     </>

   }
    <DefaultPage>
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
    </DefaultPage>
    </>
  );
};

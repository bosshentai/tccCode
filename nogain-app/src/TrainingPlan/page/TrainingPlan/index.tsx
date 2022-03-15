

import React, {useEffect, useState} from "react";
import { DefaultPage } from "../../../shared/components/UIElements/DefaultPage"

import styles from "./styles.module.scss";



const DUMMY_Data = [
  {
    id: '1',
    name: 'plano 1',
    amount: 10,

  },
  {
    id: '2',
    name: 'plano 2',
    amount: 20,
  },
  {
    id: '3',
    name: 'plano 3',
    amount: 30,
  }
]


export const TrainingPlan = () => {

  const [listEmpty,setListEmpty] = useState(true);

  const [listPlanningTrain,setListPlanningTrain] = useState([]);

  useEffect( () => {
    setListPlanningTrain([])
    if(listPlanningTrain.length === 0){
      setListEmpty(true);
    }else {
      setListEmpty(false);
    }
  })

  return <DefaultPage>
   {listEmpty && <p className={styles.p}>Sem Plano de Treino</p>}

   {!listEmpty && <div className={styles.container}></div> }
  </DefaultPage>
}
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../../../shared/components/UIElements/Backdrop";
import { DefaultPage } from "../../../shared/components/UIElements/DefaultPage";

import styles from "./styles.module.scss";

const portalElement = document.getElementById("overlays") as HTMLElement;

const DUMMY_Data = [
  {
    id: "1",
    name: "plano 1",
    amount: 10,
  },
  {
    id: "2",
    name: "plano 2",
    amount: 20,
  },
  {
    id: "3",
    name: "plano 3",
    amount: 30,
  },
];

export const TrainingPlan = () => {
  const [listEmpty, setListEmpty] = useState(true);

  const [addTrainingPlan, setAddTrainingPlan] = useState(false);

  const [listPlanningTrain, setListPlanningTrain] = useState([]);

  useEffect(() => {
    setListPlanningTrain([]);
    if (listPlanningTrain.length === 0) {
      setListEmpty(true);
    } else {
      setListEmpty(false);
    }
  });

  const showAddTrainingHandler = () => {
    setAddTrainingPlan(true);
  };

  const closeAddTrainingHandler = () => {
    setAddTrainingPlan(false);
  };

  return (
    <>
      {addTrainingPlan &&
        ReactDOM.createPortal(
          <>
            <Backdrop onClose={closeAddTrainingHandler} />
          </>,
          portalElement
        )}

      <DefaultPage>
        {listEmpty && <p className={styles.p}>Sem Plano de Treino</p>}

        {!listEmpty && <div className={styles.container}></div>}

        <div>
          <button onClick={showAddTrainingHandler}>Adicionar</button>
        </div>
      </DefaultPage>
    </>
  );
};
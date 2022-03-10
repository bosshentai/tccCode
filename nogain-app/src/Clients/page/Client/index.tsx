import React, { useEffect } from "react";
import { DefaultPage } from "../../../shared/components/UIElements/DefaultPage";
import { ClientList } from "../../components/ClientList";

import styles from "./styles.module.scss";

type client = {
  id: string;
  name: string;
  email: string;
  trainPlan: string;
};

const DUMMY_DATA = [
  {
    id: "1asadas",
    name: "Hernani",
    email: "lomba@gmail.com",
    trainPlan: "lomba",
  },
];

export const Client = () => {
  const [listEmpty, setListEmpty] = React.useState(true);

  const [addClientIsShown, setClientIsShown] = React.useState(false);

  const [listClient, setListClient] = React.useState<client[]>(DUMMY_DATA);

  useEffect(() => {
    if (listClient.length === 0) {
      setListEmpty(true);
    } else {
      setListEmpty(false);
    }
  }, [listClient, setListClient]);

  return (
    <DefaultPage>
      {listEmpty && <p className={styles.p}>Sem clientes</p>}
      {!listEmpty && (
        <div className={styles.tableContainer}>
          <div className={styles.header}>
            <div className={styles.title}>
              <p>Nome</p>
            </div>
            <div className={styles.title}>
              <p>Email</p>
            </div>
            <div className={styles.title}>
              <p>Plano de Treino</p>
            </div>
          </div>
          <ClientList clients={DUMMY_DATA} />
        </div>
      )}
    <div className={styles.btnContainer}>
        <button>
          <p>Adicionar Cliente</p> 
        </button>
    </div>

    </DefaultPage>
  );
};

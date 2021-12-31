import { useState } from "react";
import { EmployeeList } from "../../components/employee/EmployeeList";
import { DefaultPage } from "../../components/layout/DefaultPage";

import styles from "./styles.module.scss";

export const Welcome = () => {
  const [listEmpty, setListEmpty] = useState(false);

  const classDefaultController = listEmpty ? `` : `${styles.listEmpty}`;

  return (
    <DefaultPage className={classDefaultController}>
      {listEmpty && <p className={styles.p}>Sem funcionarios</p>}

      {!listEmpty && (
        <div className={styles.tableContainer}>
          <div className={styles.header}>
            <div className={styles.title}>
              <p>Nome</p>
            </div>
            <div className={styles.title}>Email</div>
            <div className={styles.title}>Status</div>
          </div>
          <EmployeeList />
        </div>
      )}

      {/* <button> Exemplo</button> */}
    </DefaultPage>
  );
};

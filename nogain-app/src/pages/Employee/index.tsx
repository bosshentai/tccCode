import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { EmployeeList } from "../../components/employee/EmployeeList";
import { DefaultPage } from "../../components/layout/DefaultPage";
import { Backdrop } from "../../components/UI/Backdrop";

import styles from "./styles.module.scss";

const portalElement = document.getElementById("overlays") as HTMLElement;

type employee = {
  id: string;
  name: string;
  email: string;
  status: string;
};

const DUMMY_DATA = [
  {
    id: "1asadas",
    name: "Hernani",
    email: "baptista@gmail.com",
    status: "Ativo",
  },
  {
    id: "2asxzad",
    name: "Rania",
    email: "rania@gmail.com",
    status: "Inativo",
  },
];

export const Employee = () => {
  const [listEmpty, setListEmpty] = useState(true);

  const [addEmployeeIsShown, setEmployeeIsShown] = useState(false);

  const [listEmployee, setListEmployee] = useState<employee[]>(DUMMY_DATA);

  useEffect(() => {
    if (listEmployee.length === 0) {
      setListEmpty(true);
    } else {
      setListEmpty(false);
    }
  }, [listEmployee, setListEmployee]);

  const classDefaultController = listEmpty ? `` : `${styles.listEmpty}`;

  const showAddEmployeeHandler = () => {
    setEmployeeIsShown(true);
  };

  return (
    <>
      {addEmployeeIsShown && ReactDOM.createPortal(<Backdrop />, portalElement)}
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
            <EmployeeList employees={DUMMY_DATA} />
          </div>
        )}

        <div className={styles.btnContainer}>
          <button onClick={showAddEmployeeHandler}>
            <p>Adicionar Funcionario</p>
          </button>
        </div>
      </DefaultPage>
    </>
  );
};

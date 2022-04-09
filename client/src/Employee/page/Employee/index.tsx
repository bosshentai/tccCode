import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { EmployeeList } from "../../components/EmployeeList";
import { DefaultPage } from "../../../shared/components/UIElements/DefaultPage";
import { Backdrop } from "../../../shared/components/UIElements/Backdrop";

import styles from "./styles.module.scss";
import { AddEmployee } from "../AddEmployee";
import axios from "axios";

const portalElement = document.getElementById("overlays") as HTMLElement;

const urlPath = "http://localhost:4003/api/employee/all";

type employee = {
  id: string;
  name: string;
  email: string;
  status: string;
};

// const DUMMY_DATA = [
//   {
//     id: "1asadas",
//     name: "Hernani",
//     email: "baptista@gmail.com",
//     status: "Ativo",
//   },
//   {
//     id: "2asxzad",
//     name: "Hern",
//     email: "test@gmail.com",
//     status: "Inativo",
//   },
// ];

export const Employee = () => {
  const [listEmpty, setListEmpty] = useState(true);

  const [addEmployeeIsShown, setEmployeeIsShown] = useState(false);

  

  const [listEmployee, setListEmployee] = useState<employee[]>([]);

  useEffect(  () => {
 
    axios.get(urlPath).then((response) => {
      setListEmployee(response.data);
    });


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

  const closeAddEmployeeHandler = () => {
    setEmployeeIsShown(false);
  };

  return (
    <>
      {addEmployeeIsShown &&
        ReactDOM.createPortal(
          <>
            <Backdrop onClose={closeAddEmployeeHandler} />,
            <AddEmployee onClose={closeAddEmployeeHandler} />
          </>,
          portalElement
        )}
      <DefaultPage className={classDefaultController}>
        {listEmpty && <p className={styles.p}>Sem funcionarios</p>}

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
                <p>Status</p>
              </div>
            </div>
            <EmployeeList employees={listEmployee} />
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

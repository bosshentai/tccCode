import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { EmployeeList } from "../../components/EmployeeList";
import { DefaultPage } from "../../../shared/components/UIElements/DefaultPage";
import { Backdrop } from "../../../shared/components/UIElements/Backdrop";

import styles from "./styles.module.scss";
import { AddEmployee } from "../AddEmployee";
import axios, { AxiosResponse } from "axios";

const portalElement = document.getElementById("overlays") as HTMLElement;

type employee = {
  id: string;
  name: string;
  email: string;
  status: string;
};

// type GetEmployeeResponse = {
//   data: employee[];
// };



export const Employee = () => {
  const [listEmpty, setListEmpty] = useState(true);

  const [addEmployeeIsShown, setEmployeeIsShown] = useState(false);

  const [listEmployee, setListEmployee] = useState<employee[]>([]);

  useEffect(() => {
    const urlPath = "http://localhost:5000/api/employee/all";

    try {
      // setInterval(() => {
        axios.get(urlPath).then((response: AxiosResponse) => {
          setListEmployee(response.data);
        });

        // setListEmployee(DUMMY_DATA);
      // }, 1000);

      // const { data ,status } =  axios.get<GetEmployeeResponse>(urlPath,
      //   {
      //     headers: {
      //       Accept: "application/json",
      //     },}
      //     );

      //     return data;
    } catch (error) {
      console.log("Error: " + error);
    }

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
        {listEmpty && <p className={styles.p}>Sem funcionários</p>}

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
            <p>Adicionar Funcionário</p>
          </button>
        </div>
      </DefaultPage>
    </>
  );
};

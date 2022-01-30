import { useEffect, useState } from "react";
import { EmployeeList } from "../../components/employee/EmployeeList";
import { DefaultPage } from "../../components/layout/DefaultPage";

import styles from "./styles.module.scss";





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


  const [addEmployeeIsShown,setEmployeeIsShown] = useState(false);


  // console.log(DUMMY_DATA.length)

  useEffect(() => {
    if (DUMMY_DATA.length === 0) {
      setListEmpty(true);
      
      
    }else {
      setListEmpty(false);
    }
  },[])


  

  

  const classDefaultController = listEmpty ? `` : `${styles.listEmpty}`;


  const showAddEmployeeHandler = () =>{
    // console.log("Abriou");
    setEmployeeIsShown(true);
  }

  


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
          <EmployeeList employees={DUMMY_DATA}/>
        </div>
      )}

      <div className={styles.btnContainer}>
        <button onClick={showAddEmployeeHandler}>
          <p>Adicionar Funcionario</p>
        // </button> 
      </div>
    </DefaultPage>
  );
};

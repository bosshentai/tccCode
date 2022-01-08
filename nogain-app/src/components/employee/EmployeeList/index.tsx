import { EmployeeItem } from "../EmployeeItem";
import styles from "./styles.module.scss";



const DUMMY_DATA = [
   {
     id: "1",
     name: "Hernani",
     email: "baptista@gmail.com",
     status: "Ativo",
   },
   {
     id: "2",
     name: "Rania",
     email: "rania@gmail.com",
     status: "Inativo",
   }
]

export const EmployeeList = () => {

  

  return (
    <ul className={styles.employeeList}>
     
      {
        DUMMY_DATA.map(employee => (
          <EmployeeItem id={employee.id} name={employee.name} email={employee.email} status={employee.status} />
        ))
      } 
    
    </ul>
  );
};

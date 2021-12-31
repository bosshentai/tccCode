import { EmployeeItem } from "../EmployeeItem";
import styles from "./styles.module.scss";

export const EmployeeList = () => {
  return (
    <ul className={styles.employeeList}>
      <EmployeeItem/>
      <EmployeeItem/>

    </ul>
  );
};

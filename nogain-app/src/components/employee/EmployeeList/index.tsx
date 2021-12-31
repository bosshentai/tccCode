import { EmployeeItem } from "../EmployeeItem";
import styles from "./styles.module.scss";

export const EmployeeList = () => {
  return (
    <ul className={styles.employeeList}>
      {/* <EmployeeItem/>
      <EmployeeItem/> */}
      <EmployeeItem id={"1"} name={"Hernani"} email={"teste"} status={"Ativo"} />

    </ul>
  );
};

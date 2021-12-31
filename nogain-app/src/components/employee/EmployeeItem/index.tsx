import styles from "./styles.module.scss";

export const EmployeeItem = () => {
  return (
    <li className={styles.employeeContainer}>
      <div className={styles.info}>
        <p>Hernâni Baptista</p>
      </div>
      <div className={styles.info}>
        <p>baptistamhernani@gmail.com</p>
      </div>
      <div>
        <p>Ativo</p>
      </div>
    </li>
  );
};

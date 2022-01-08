import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

type employeeInfo = {
  id: string;
  name: string;
  email: string;
  status: string;
};

export const EmployeeItem = (props: employeeInfo) => {
  const { id, name, email, status } = props;

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (status === "Ativo") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [isActive]);

  const statusClasseControle = isActive
    ? styles.statusActive
    : styles.statusInactive;

  return (
    <li key={id} className={styles.employeeContainer}>
      <div className={styles.info}>
        <p>{name}</p>
      </div>
      <div className={styles.info}>
        <p>{email}</p>
      </div>
      <div>
        <p className={statusClasseControle}>{status}</p>
      </div>
    </li>
  );
};

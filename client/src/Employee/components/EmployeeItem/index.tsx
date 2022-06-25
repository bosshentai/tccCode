import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
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
  }, [isActive, status]);

  const statusClasseControle = isActive
    ? styles.statusActive
    : styles.statusInactive;

  // const onClick = () => {
  //   // props.onClick(id);
  // }

  return (
    <li key={id} id={id} className={styles.employeeContainer}>
      {/* <NavLink to={`Profile/${id}`}> */}
      <NavLink to="Profile">
        <div className={styles.info}>
          <p>{name}</p>
        </div>
        <div className={styles.info}>
          <p>{email}</p>
        </div>
        <div>
          <p className={statusClasseControle}>{status}</p>
        </div>
      </NavLink>
    </li>
  );
};
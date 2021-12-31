import styles from "./styles.module.scss";

type employeeInfo ={
  id : string
  name: string;
  email: string;
  status: string;
}

export const EmployeeItem = (props: employeeInfo) => {

  const {id, name, email, status} = props;

  return (
    <li key={id} className={styles.employeeContainer}>
      <div className={styles.info}>
        <p>{name}</p>
      </div>
      <div className={styles.info}>
        <p>{email}</p>
      </div>
      <div>
        <p>{status}</p>
      </div>
    </li>
  );
};


import { EmployeeItem } from "../EmployeeItem";
import styles from "./styles.module.scss";

type employee = {
  id: string;
  name: string;
  email: string;
  status: string;
};

type employeeListProps = {
  employees: employee[] | [];
};

export const EmployeeList = (props: employeeListProps) => {
  const employeeData = props.employees;

  // console.log(employeeData);

  return (
    <ul  className={styles.employeeList}>
      {employeeData.map((employee: employee) => (
        <EmployeeItem
          key={employee.id}
          id={employee.id}
          name={employee.name}
          email={employee.email}
          status={employee.status}
        />
      ))}
    </ul>
  );
};

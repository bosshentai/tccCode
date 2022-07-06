import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";
import { EmployeeItem } from "../../../Components/Employee/components/EmployeeItem";

export default {
  title: "EmployeeItem",
  component: EmployeeItem,
  decorators: [withRouter]
}


const employeeInfoActive = {
  id: "1",
  name: "exemple",
  email: "exempl@mail.com",
  status: "Ativo",
}


const employeeInfoInactive = {
  id: "1",
  name: "exemple",
  email: "exempl@mail.com",
  status: "Inativo"
}



export const EmployeeActive = () => 
  <EmployeeItem
    key={employeeInfoActive.id}
    id={employeeInfoActive.id}
    name={employeeInfoActive.name}
    email={employeeInfoActive.email}
    status={employeeInfoActive.status} />



export const EmployeeInactive = () => 
  <EmployeeItem
    key={employeeInfoInactive.id}
    id={employeeInfoInactive.id}
    name={employeeInfoInactive.name}
    email={employeeInfoInactive.email}
    status={employeeInfoInactive.status} />

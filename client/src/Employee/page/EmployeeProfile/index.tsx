import React from "react";
import { Link, useParams } from "react-router-dom";
import { DefaultPage } from "../../../shared/components/UIElements/DefaultPage";





export function EmployeeProfile() {
    const { employeeId }  = useParams();

    console.log(employeeId)
  return (
    <DefaultPage>
      <Link to={`Profile/${employeeId}`}>
      <h1>PersonalTrainerProfile</h1>
      {/* <p>{params.employeeId}</p> */}
      </Link>
    </DefaultPage>
  );
}
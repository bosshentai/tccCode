import React from "react";
import { Link, useParams } from "react-router-dom";





export function EmployeeProfile() {
    const { employeeId }  = useParams();

    console.log(employeeId)
  return (
    <div>
      <Link to="Profile">
      <h1>PersonalTrainerProfile</h1>
      {/* <p>{params.employeeId}</p> */}
      </Link>
    </div>
  );
}
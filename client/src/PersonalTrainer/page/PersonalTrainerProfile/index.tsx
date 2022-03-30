import React from "react";
import { useParams } from "react-router-dom";









export function PersonalTrainerProfile() {
  let { employeeId } = useParams();

  return (
    <div>
      <h1>PersonalTrainerProfile</h1>
      {employeeId}
    </div>
  );
}
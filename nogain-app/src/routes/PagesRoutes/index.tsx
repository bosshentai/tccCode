import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { Client } from "../../Clients/page/Client";
import { Discount } from "../../Discount/page/Discount";
import { Employee } from "../../Employee/page/Employee";
import { PersonalTrainer } from "../../PersonalTrainer/page/PersonalTrainer";
import { TrainingPlan } from "../../TrainingPlan/page/TrainingPlan";
import { Welcome } from "../../Welcome/page/Welcome";

export function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/Client" element={<Client />} />
      <Route path="/TrainingPlan" element={<TrainingPlan />} />
      <Route path="/Discount" element={<Discount />} />
      <Route path="/Employee" element={<Employee />} />
      <Route path="/PersonalTrainer" element={<PersonalTrainer />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

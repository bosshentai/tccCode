
import { Routes, Route } from "react-router-dom";

import { Client } from "./pages/Client";
import { Discount } from "./pages/Discount";
import { Layout } from "./components/layout/Layout";
import { Welcome } from "./pages/Welcome";
import { Employee } from "./pages/Employee";
import { TrainingPlan } from "./pages/TrainingPlan";
import { PersonalTrainer } from "./pages/PersonalTrainer";

export function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/client" element={<Client />} />
        <Route path="/trainingPlan" element={<TrainingPlan />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/personalTrainer" element={<PersonalTrainer />} />
      </Routes>
    </Layout>
  );
}

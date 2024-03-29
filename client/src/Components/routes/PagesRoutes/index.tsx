import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { Client } from '../../Clients/page/Client'
import { Discount } from '../../Discount/page/Discount'
import { Employee } from '../../Employee/page/Employee'
import { EmployeeProfile } from '../../Employee/page/EmployeeProfile'
import { PersonalTrainer } from '../../PersonalTrainer/page/PersonalTrainer'
import { TrainingPlan } from '../../TrainingPlan/page/TrainingPlan'
import { Welcome } from '../../Welcome/page/Welcome'
import { ClientProfile } from '../../Clients/page/ClientProfile/index'
import { PersonalTrainerProfile } from '../../PersonalTrainer/page/PersonalTrainerProfile'

// const test = lazy(() =>  import ("../../Clients/page/Client")).then(module => module.default{
//   test: module.Client
// });

// const Client  = lazy( async () => {
//   const module = await import("../../Clients/page/Client");
//   return { default: <Client/> };
// // });

// const Client = lazy(() => import("../../Clients/page/Client")
//   .then(( module) => ({ default: module.Client })));

export function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      {/* <Route path="/Client" element={<Client />} /> */}
      <Route path="/Client" element={<Client />} />
      <Route
        path="/Client/Profile/:id"
        element={<ClientProfile />}
      />
      <Route
        path="/TrainingPlan"
        element={<TrainingPlan />}
      />
      <Route path="/Discount" element={<Discount />} />
      <Route path="/Employee" element={<Employee />} />
      <Route
        path="/Employee/Profile/:id"
        element={<EmployeeProfile />}
      />

      {/* <Route path="/Employee/Profile/" element={<EmployeeProfile />} /> */}

      <Route
        path="/PersonalTrainer"
        element={<PersonalTrainer />}
      />

      <Route
        path="/PersonalTrainer/Profile/:id"
        element={<PersonalTrainerProfile />}
      />

      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  )
}

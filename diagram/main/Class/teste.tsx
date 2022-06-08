 export class Person {
   id: number;
  name: string;
  phone: string;
  cni: string;
  nif: string;
  email: string;
  birthDay: Date;
  password: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;

}

export enum Role {
  MANAGER,
  EMPLOYEE,
  CUSTOMER,
  PERSONALTRAINER
}

export class Discount {
  id: number;
  name: string;
  description: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

export class TrainingPlan {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export class ClientTraningPersonalDiscountTrainingPlan{
  id: number;
  clientId: Person; // Client id
  createdId: Person; // Employee id || MANAGER id
  discount: Discount;
  trainingPlan: TrainingPlan;
  createdAt: Date;
  updatedAt: Date;
}


class CustomerHistory {
  id: number;
  clientId: Person; // Client id
  createdAt: Date;
  updatedAt: Date;
}
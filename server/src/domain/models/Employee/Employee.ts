import { Role } from "../Role/Role";


export interface Employees {
  id: string;
  name: string
  email: string;
  birth_date: Date;
  roles: Role;
  phone: string
  CNI?: string
  NIF?: string
  password: string


}
import { IsEmailOptions } from "express-validator/src/options"

export interface ICreatePersonalTrainerDTO{
  name: string
  email: string
  phone: string
  CNI: string
  NIF: string
  birth: Date
  value: number
}
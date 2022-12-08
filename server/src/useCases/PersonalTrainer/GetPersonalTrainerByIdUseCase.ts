import { prismaClient } from '../../database/prismaClient';
import { IGetPersonalTrainerByIdDTO } from './../../repositories/dto/PersonalTrainer/IGetPersonalTrainerByIdDTO';




export class GetPersonalTrainerByIdUseCase {
  async handle({id}: IGetPersonalTrainerByIdDTO){
   const personalTrainer = await prismaClient.personalTrainer.findUnique({
    where:{
      id
    }
   })


   if(!personalTrainer){
    throw new Error("Personal Trainer list is empty");
   }


   return personalTrainer
  }
}
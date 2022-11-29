import { prismaClient } from "../../database/prismaClient";

export class GetPaymentByIdUseCase {
  async handle({ userId } :{ userId: string}  ) {

    const payment = await prismaClient.client.findUnique({
      where:{
        id : userId
      },

      select:{
        cpt:{
          select:{
            personal_trainer_id: true
          },
          
        },
        ctp:{
          select:{
            training_plan_id: true
          }
        },

        cd:{
          select:{
            discount_id: true
          }
        }

      }
    })


   const paymentInfo ={
    personalTrainerId : payment?.cpt?.personal_trainer_id,
    trainingPlanId: payment?.ctp?.training_plan_id,
    discountPlanId: payment?.cd?.discount_id
   }


   return paymentInfo;
  }
}

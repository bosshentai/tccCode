import { prismaClient } from '../../database/prismaClient'
import { IGetClientByIdDTO } from '../../repositories/dto/Client/IGetClientByIdDTO'

export class GetClientByIdUseCase {
  async handle({ id }: IGetClientByIdDTO) {
    const clientExist =
      await prismaClient.client.findUnique({
        where: {
          id,
        },

        select: {
          user: {
            select: {
              name: true,
              email: true,
              birth_date: true,
            },
          },
          cpt: {
            select: {
              id: true,
              // personal_trainer_id,
            },
          },
          ctp: {
            select: {
              id: true,
            },
          },
          cd: {
            select: {
              id: true,
            },
          },
        },
      })

    if (!clientExist) {
      throw Error("client don't exist")
    }

    const clientInfo = {
      name: clientExist.user.name,
      email: clientExist.user.email,
      birth: clientExist.user.birth_date,
      personalTrainerID: clientExist.cd?.id,
      trainingPlanID : clientExist.ctp?.id,
      discountID: clientExist.cd?.id
    }

    return clientInfo
  }
}

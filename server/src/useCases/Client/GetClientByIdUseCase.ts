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
            },
          },
        },
      })

    if (!clientExist) {
      throw Error("client don't exist")
    }

    return clientExist
  }
}

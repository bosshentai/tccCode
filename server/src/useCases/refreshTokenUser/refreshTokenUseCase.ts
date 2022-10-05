import { prisma, PrismaClient } from '@prisma/client'
import dayjs from 'dayjs'
import { ClientRequest } from 'http'
import { prismaClient } from '../../database/prismaClient'
import { HttpError } from '../../models/http-error'
import { GenerateRefreshTokenProvider } from '../../provider/GenerateRefreshTokenProvider'
import { GenerateTokenProvider } from '../../provider/GenerateTokenProvider'

export class RefreshTokenUseCase {
  async handle(refresh_Token: string) {
    const refreshToken =
      await prismaClient.refreshToken.findFirst({
        where: {
          id: refresh_Token,
        },
      })

    if (!refreshToken) {
      throw new Error('Refresh Token invalid;')
    }

    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshToken.expiresIn),
    )

    const generateTokenProvider =
      new GenerateTokenProvider()
    const token = await generateTokenProvider.execute(
      refreshToken.userId,
    )

    if (refreshTokenExpired) {
      await prismaClient.refreshToken.deleteMany({
        where: {
          userId: refreshToken.userId,
        },
      })

      const generateRefreshTokenProvider =
        new GenerateRefreshTokenProvider()
      const newRefreshToken =
        await generateRefreshTokenProvider.execute(
          refreshToken.id,
        )

        return {token,newRefreshToken}
    }

    return token
  }
}

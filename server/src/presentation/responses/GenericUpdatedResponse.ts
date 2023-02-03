import { ResponseHandler } from '../../application/ports/responses/ResponseHandler'
import { ResponseModel } from '../../application/ports/responses/ResponseModel'

export class GenericUpdateResponse
  implements ResponseHandler<void>
{
  async response(): Promise<ResponseModel<void>> {
    const responseData = {
      statusCode: 204,
      body: undefined,
    }

    return responseData
  }
}

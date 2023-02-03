import { ResponseHandler } from '../../application/ports/responses/ResponseHandler';
import { ResponseModel } from '../../application/ports/responses/ResponseModel';


export class GenericCreatedResponse<T> implements ResponseHandler<T>{
  async response(body: T): Promise<ResponseModel<T>> {
    const responseData = {
      statusCode: 201,
      body,
    }

    return responseData
  }

}
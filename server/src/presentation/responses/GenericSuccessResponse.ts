import { ResponseHandler } from "../../application/ports/responses/ResponseHandler";
import { ResponseModel } from "../../application/ports/responses/ResponseModel";



export class GenericSuccessResponse<T> implements ResponseHandler<T>{
  async response(body: T): Promise<ResponseModel<T>> {
    return {
      statusCode: 200,
      body
    }
  }
}
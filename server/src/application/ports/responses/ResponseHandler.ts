import {ResponseModel} from "./ResponseModel"

export interface ResponseHandler<T= any> {
  response(body: T): Promise<ResponseModel<T>>
}
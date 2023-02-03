import { RequestModel } from "../../requests/requestModel";
import { ResponseModel } from "../responses/ResponseModel";


export interface Controller<T = unknown>{
  handleRequest(requestModel: RequestModel): Promise<ResponseModel<T>>
}
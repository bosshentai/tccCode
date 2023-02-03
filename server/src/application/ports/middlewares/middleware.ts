import { MiddlewareRequestModel } from "../../requests/middlewareRequestModel";


export interface Middleware{
  handleRequest(requestModel: MiddlewareRequestModel): Promise<void> | never
}
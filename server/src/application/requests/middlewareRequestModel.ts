import { RequestModel } from "./requestModel";


export interface MiddlewareRequestModel extends RequestModel {
  method?: string;
}
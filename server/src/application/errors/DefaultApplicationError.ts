import { ResponseModel } from "../ports/responses/ResponseModel"


export type ErrorParams = {
  name?: string
  message?: string
  statusCode?: number
  messages?: string[]
  stack?: Error['stack']
}



export type ErrorResponseModel = Omit<ResponseModel<ErrorParams>,'body'>

export class DefaultApplicationError extends Error {

  public statusCode = 500;
  public messages: string[] = [];


  constructor(message?:string){
    super(message)
    this.message = message || this.name;
    this.name = 'DefaultApplicationError';
    this.messages.push(this.message);
  }
}
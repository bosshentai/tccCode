import { GenericCreatedResponse } from "./GenericCreateResponse";


describe('Create Presenter', ()=>{
  it("shoul have properties statusCode 201 and body", async()=>{
    const info = new GenericCreatedResponse();

    const bodyValue = { anyKey: "lomba"};

    const expectedReturn = {
      statusCode: 201,
      body: bodyValue
    }


    const response  = await info.response(bodyValue);


    expect(response).toEqual(expectedReturn);


  })
})
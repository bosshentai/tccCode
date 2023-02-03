import { GenericSuccessResponse } from "./GenericSuccessResponse"


describe('Success Presenter', () => {

  it("should have properties statusCode 200 and body", async()=>{
    const info = new GenericSuccessResponse()

    const bodyValue = {anyKey: "lomba"}

    const expectedReturn = {
      statusCode: 200,
      body: bodyValue
    }

    const response = await info.response(bodyValue);
    expect(response).toEqual(expectedReturn);
  })
})
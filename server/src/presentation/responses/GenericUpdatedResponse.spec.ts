import { GenericUpdateResponse } from './GenericUpdatedResponse';


describe("Generic Update Presenter", ()=>{
  it('should have proprieties statusCode 204 and no body', async() =>{
    const info = new GenericUpdateResponse()

    const expectedReturn = {
      statusCode: 204
    }

    const response = await info.response()

    expect(response).toEqual(expectedReturn);
  })
})
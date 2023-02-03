import { GenericDeleteResponse } from './GenericDeletedResponse'

describe('Generic Deleted Response', () => {
  it('should have properties statusCode 204 and No body', async () => {
    const info = new GenericDeleteResponse()

    const expectedReturn = {
      statusCode: 204,
    }

    const response = await info.response()
    expect(response).toEqual(expectedReturn)
  })
})

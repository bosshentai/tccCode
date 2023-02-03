import { RequestValidationError } from './RequestValidationError'

describe('RequestValidationError', () => {
  it('should have properties statusCode and messages', () => {
    let error

    const throwEr = () => {
      try {
        throw new RequestValidationError(
          'Some Error message',
        )
      } catch (e) {
        error = e
      }
    }

    throwEr()
    expect(error).toEqual(
      expect.objectContaining({
        name: 'RequestValidationError',
        message: 'Some Error message',
        statusCode: 400,
        messages: expect.arrayContaining([
          'Some Error message',
        ]),
      }),
    )
  })
})

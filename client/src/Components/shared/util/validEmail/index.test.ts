import { validEmail } from '.'

describe('Email tests', () => {
  test('Email is Valid', () => {
    // Arrange
    const userEmailInput = 'baptistaHernani@gmail.com'

    const result = validEmail(userEmailInput)

    expect(result).toBe(true)
  })

  test('Email is Invalid without endTail (egs: .com)', () => {
    const userEmailInput = 'baptistaHernani@gmail'

    const result = validEmail(userEmailInput)

    expect(result).toBe(false)
  })

  test('Email is Invalid without @ and .com', () => {

    const userEmailInput = 'baptistaHernani@.com'

    const result = validEmail(userEmailInput)

    expect(result).toBe(false)

  })


  test('Email is invalid 3', () => {
    // Arrange
    const userEmailInput = 'baptista.com'

    const result = validEmail(userEmailInput);
    // Assert
    expect(result).toBe(false);
  })

})

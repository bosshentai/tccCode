import { validPhoneNumber } from '.'

describe('Phone Number Test', () => {
  test('should phone number be valid', () => {
    const phoneNumber = '9541850'
    // Act
    const result = validPhoneNumber(phoneNumber)
    // Assert
    expect(result).toBe(true)
  })

  test('should phone number be invalid', () => {
    const phoneNumber = '9123412341234'
    // Act
    const result = validPhoneNumber(phoneNumber)
    // Assert
    expect(result).toBe(false)
  })
})

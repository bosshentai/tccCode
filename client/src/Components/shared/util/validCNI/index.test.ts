import { validCNI } from '.'

describe('CNI test', () => {
  test('should CNI be valid', () => {
    const cni = '19931022M003R'

    // Act
    const result = validCNI(cni)

    // Assert
    expect(result).toBe(true)
  })

  test('CNI is invalid', () => {
    // Arrange
    const cni = '19931022MF03R'

    // Act
    const result = validCNI(cni)

    //Assert
    expect(result).toBe(false)
  })
})

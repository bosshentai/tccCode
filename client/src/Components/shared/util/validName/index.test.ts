import { validName } from '.'

describe('Name Test', () => {
  test('Name is valid', () => {
    const name = 'Hernani Morais Baptista'

    const result = validName(name)


    expect(result).toBe(true)
  })


  test('Name is invalid', () => {
    const name = "Hernani Morais Bapti5ta"

    const result = validName(name)
    expect(result).toBe(false)
  })
})

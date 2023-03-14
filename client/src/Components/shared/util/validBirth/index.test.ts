import { validBirth } from '../validBirth'

describe('Birth Date Test', () => {
  test('Birthday is valid', () => {
    //Data test

    const day = 22
    const month = 10
    const year = 1993

    const result = validBirth(day, month, year)

    expect(result).toBe(true)
    // expect
  })

  test('Birthday the day is invalid', () => {
    const day = 33
    const month = 10
    const year = 1993

    const result = validBirth(day, month, year)

    expect(result).toBe(false)
  })

  test('Birthday the month is invalid', () => {
    const day = 22
    const month = -1
    const year = 1993

    const result = validBirth(day, month, year)

    expect(result).toBe(false)
  })

  test ('Birthday the year is invalid', () => {
    const day = 22
    const month = 10
    const year = -1


    const result = validBirth(day, month, year)

    expect(result).toBe(false)
  })

  // make to see if the birthDay is not next day

  // test('Future Birthday is not valid',()=>{
  //   const addDay = 2 ;
  //   const futureDate = new Date(Date.now() + addDay*24*60*60*1000)


  //   console.log( "Teste date: " +futureDate)


  //   const result = validBirth(futureDate.getDay(),futureDate.getMonth(),futureDate.getFullYear())


  //   expect(result).toBe(false)
  // })

})

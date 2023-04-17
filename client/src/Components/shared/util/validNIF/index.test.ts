import { validNIF } from ".";




describe("NIF Test",()=>{
  test("should nif be valid",()=>{
    const nif = '123456789'
    // Act
    const result = validNIF(nif);
    // Assert
    expect(result).toBe(true);
  })


  test('should nif be invalid',()=>{

    const nif = '12345678'
    // Act
    const result = validNIF(nif);
    // Assert
    expect(result).toBe(false);
  })
})
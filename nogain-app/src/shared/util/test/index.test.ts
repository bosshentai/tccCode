import { validBirth } from "../validBirth";
import { validCNI } from "../validCNI";
import { validEmail } from "../validEmail";
import { validName } from "../validName";
import { validNIF } from "../validNIF";
import { validPhoneNumber } from "../validPhoneNumber";


describe('Util validBirth', () => {
  test('Birthday is valid', () => {
    // Arrange
    const day = 1;
    const month = 1;
    const year = 2020;

    // Act
    const result = validBirth(day, month, year);

    // Assert
    expect(result).toBe(true);
  })

  test('Birthday is invalid', () => {
    // Arrange
    const day = 32;
    const month = 1;
    const year = 2020;

    // Act
    const result = validBirth(day, month, year);

    // Assert
    expect(result).toBe(false);
  })
});


describe('Util validCNI', () => {
  test('CNI is valid', () => {
    // Arrange
    const cni = '19931022M003R';

    // Act
    const result = validCNI(cni);

    // Assert
    expect(result).toBe(true);
  })

  test('CNI is invalid', () => {
    // Arrange
    const cni = '19931022MF03R';

    // Act
    const result = validCNI(cni);

    //Assert
    expect(result).toBe(false);

  })
})

describe('util validEmail', () => {
  test('Email is valid', () => {
    // Arrange
    const email = 'baptistamhernani@gmail.com'
    // Act
    const result = validEmail(email);
    // Assert
    expect(result).toBe(true);
  })

  test('Email is invalid 1', () => {
    // Arrange
    const email = 'baptistamhernani@gmail'
    // Act
    const result = validEmail(email);
    // Assert
    expect(result).toBe(false);
  })

  test('Email is invalid 2', () => {
    // Arrange
    const email = 'baptistamhernani@.com'
    // Act
    const result = validEmail(email);
    // Assert
    expect(result).toBe(false);
  })

  test('Email is invalid 3', () => {
    // Arrange
    const email = 'baptista.com'

    const result = validEmail(email);
    // Assert
    expect(result).toBe(false);
  })

})


describe('util validName', () => {

  test('Name is Valid', () => {
    // Arrange
    const name = 'Hernâni Morais Baptista'
    // Act
    const result = validName(name);
    // Assert
    expect(result).toBe(true);
  })

  test('Name is Invalid', () => {
    // Arrange
    const name = 'Baptista&'
    // Act
    const result = validName(name);
    // Assert
    expect(result).toBe(false);
  })

})



describe('util validNIF',()=>{
  test('NIF is valid',()=>{
    // Arrange
    const nif = '123456789'
    // Act
    const result = validNIF(nif);
    // Assert
    expect(result).toBe(true);
  })

  test('NIF is invalid',()=>{
    // Arrange
    const nif = '12345678'
    // Act
    const result = validNIF(nif);
    // Assert
    expect(result).toBe(false);
  })
})


describe ('util PhoneNumber',()=>{

  test('PhoneNumber is valid',()=>{
    // Arrange
    const phoneNumber = '9541850'
    // Act
    const result = validPhoneNumber(phoneNumber);
    // Assert
    expect(result).toBe(true);
  })

  test('PhoneNumber is invalid',()=>{
    // Arrange
    const phoneNumber = '9123412341234'
    // Act
    const result = validPhoneNumber(phoneNumber);
    // Assert
    expect(result).toBe(false);
  })
})
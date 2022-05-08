

export const validPhoneNumber = (phoneNumber: string):boolean => {

/**
 * @description Checks if the phone number is valid
 * @param phoneNumber: string
 * @returns {boolean} true if phone number is valid, false otherwise
 */


  // let regex = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
  let regex =  /([9|5|3]{1}[0-9]{6})$/;

  return regex.test(phoneNumber);
}
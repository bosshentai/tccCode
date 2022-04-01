

export const validPhoneNumber = (phoneNumber: string):boolean => {


  // let regex = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
  let regex =  /([9|5|3]{1}[0-9]{6})$/;

  return regex.test(phoneNumber);
}
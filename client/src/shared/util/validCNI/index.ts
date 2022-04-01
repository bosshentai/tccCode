
import { validBirth } from "../validBirth";







const validSexCNI = (sex: string): boolean => {
  if (sex === "M" || sex === "F") {
    return true;
  }
  return false;
}



const valid3Number = (number: string): boolean => {
  let regex = /[0-9]{3}/;

  if (number.length === 3) {
    return regex.test(number);
  }

  return false;

}


const validCharacter = (character: string): boolean => {
  let regex = /[A-Z]{1}/;

  return regex.test(character);
}


export const validCNI = (cni: string): boolean => {

  let year = Number(cni.slice(0, 4));
  let month = Number(cni.slice(4, 6));
  let day = Number(cni.slice(6, 8));

  let isDataValid = validBirth(day, month, year);

  // sex
  let sex = validSexCNI(cni.slice(8, 9))
  let isValid3Number = valid3Number(cni.slice(9, 12));
  let isValidCharacter = validCharacter(cni.slice(12, 13));




  return isDataValid && sex && isValid3Number && isValidCharacter;

}



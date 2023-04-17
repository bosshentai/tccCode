
const day31 = (day: number): boolean => {
  /**
   * @description Checks if the day is between 1 and 31
   * @param day : number
   * @returns {boolean} true if day is between 1 and 31, false otherwise
   *
   *
   */
  if (day > 0 && day <= 31) {
    return true;
  } else {
    return false;
  }
}


const day30 = (day: number): boolean => {
  /**
   * @description Checks if the day is between 1 and 30
   * @param day: number
   * @returns {boolean} true if day is between 1 and 30, false otherwise
   */

  if (day > 0 && day <= 30) {
    return true;

  } else {
    return false;
  }
}


const day29 = (day: number): boolean => {

  /**
   * @description Checks if the day is between 1 and 29
   * @param day: number
   * @returns {boolean} true if day is between 1 and 29, false otherwise
   */

  if (day > 0 && day <= 29) {
    return true;
  } else {
    return false;
  }
}

const day28 = (day: number): boolean => {

  /**
   * @description Checks if the day is between 1 and 28
   * @param day: number
   * @returns {boolean} true if day is between 1 and 28, false otherwise
   */
  if (day > 0 && day <= 28) {
    return true;
  } else {
    return false;
  }
}

const bisexed = (day: number, year: number): boolean => {
  /**
   * @description Checks if leap year
   * @param day: number
   * @param year: number
   * @returns {boolean} true if leap year, false otherwise
   *
   */
  if (year % 100 === 0 && year % 400 === 0 && year % 4 === 0) {
    return day29(day);
  } else {
    return day28(day);
  }
  return false;
}


export const validBirth = (day: number, month: number, year: number): boolean => {

  /**
   * @description Checks if the date is valid
   * @param {number} day - The First input
   * @param {number} month - The Second input
   * @param {number} year - The Third input
   * @returns {boolean}  true if the date is valid, false otherwise
   */

  const currentDate = new Date()

  const selectedDate = new Date(year, month, day)

  // console.log("SelectedDate: " +selectedDate)
  // console.log("CurrentDate: " + currentDate)

  // if(currentDate.getTime() > selectedDate.getTime() ){
  //   return false;
  // }

  if (year > 0) {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return day31(day);
      case 2:
        return bisexed(day, year);
      case 4:
      case 6:
      case 9:
      case 11:
        return day30(day);
      default:
        return false;
    }
  }
  return false;
}
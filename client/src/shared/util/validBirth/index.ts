
const day31 = (day: number): boolean => {
  if (day > 0 && day <= 31) {
    return true;
  } else {
    return false;
  }
}


const day30 = (day: number): boolean => {
  if (day > 0 && day <= 30) {
    return true;

  } else {
    return false;
  }
}


const day29 = (day: number): boolean => {
  if (day > 0 && day <= 29) {
    return true;
  } else {
    return false;
  }
}

const day28 = (day: number): boolean => {
  if (day > 0 && day <= 28) {
    return true;
  } else {
    return false;
  }
}

const bisexto = (day: number, year: number): boolean => {
  if (year % 100 === 0 && year % 400 === 0 && year % 4 === 0) {
    return day29(day);
  } else {
    return day28(day);
  }

}


export  const validBirth = (day: number, month: number, year: number): boolean => {
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
        return bisexto(day, year);
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
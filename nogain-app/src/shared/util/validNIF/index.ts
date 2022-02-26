

export const validNIF = (nif: string): boolean => {
  // let regex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]{1}$/;
  let regex = /[0-9]{9}/;

  return regex.test(nif);
}


export const validNIF = (nif: string): boolean => {
  // let regex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]{1}$/;

  /**
   * @description Checks if the NIF is valid
   * @param nif: string
   * @returns {boolean} true if NIF is valid, false otherwise
   * @link https://validarnif.es/validar-nif-cabo-verde/
   */

  let regex = /[0-9]{9}/;

  return regex.test(nif);
}
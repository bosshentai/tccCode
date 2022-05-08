
export const validEmail = (email: string): boolean => {

  /**
   * @description Checks if the email is valid
   * @param email - string
   * @returns {boolean} true if email is valid, false otherwise
   */
  let regex = /.+\@.+\..+/;
  return regex.test(email);
}




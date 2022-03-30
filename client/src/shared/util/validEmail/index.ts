
export const validEmail = (email: string): boolean => {

  // /**
  //  * @remarks
  //  * This function is based use Regex to validate email.
  //  *  
  //  * 
  //  * @param email - email to validate
  //  * 
  //  * @returns true if email is valid, false otherwise
  //  * 
  //  * 
  //  */
  let regex = /.+\@.+\..+/;
  return regex.test(email);
}




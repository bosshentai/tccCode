export const validNumber = (num: string): boolean => {
  /**
   * @description Checks if the number is valid
   * @param Number: string
   * @returns {boolean} true if the number is valid, false otherwise
   */

  let reg = /^\d+$/

  return reg.test(num)
}

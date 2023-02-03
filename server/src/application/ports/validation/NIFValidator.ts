export interface nifValidator {
  isValid(nif: string): Promise<boolean>}
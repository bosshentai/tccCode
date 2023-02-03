export interface BirthValidator {
  isValid(birth: Date): Promise<boolean>
}
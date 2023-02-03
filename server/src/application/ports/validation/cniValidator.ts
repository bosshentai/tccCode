export interface cniValidator {
  isValid(cni: string): Promise<boolean>
}

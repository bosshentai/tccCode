import { ValidationComposite } from '../../../ports/validation/validationCompose'

export class ValidateStringNotEmpty extends ValidationComposite<string> {
  async validate(string: string): Promise<void> {
    if (typeof string !== 'string') {
    }
  }
}

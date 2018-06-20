export const isNumber = val => !isNaN(Number(val))
export const isEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
export const maxLength = maxAmount => val => val.length <= maxAmount
export const required = val => val && val.length

export const errorMessages = {
  isNumber: 'Value must be a number.',
  isEmail: 'Not a valid email address. Please try again.',
  maxLength: maxLength => `Must not exceed ${maxLength} characters.`,
  required: 'Required.'
}
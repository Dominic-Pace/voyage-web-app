export const scrubValidatorForErrorMessage = validation => {
  let errorMessages = {}
  for (let obj in validation) {
    errorMessages[obj] = validation[obj].errorMessage
  }
  return errorMessages
}

export const scrubValidatorForValidators = validation => {
  let validators = {}
  for (let obj in validation) {
    validators[obj] = validation[obj].validator
  }
  return validators
}

import React from 'react'
import Stepper from 'react-stepper-horizontal'

const BookingStepper = ({ currentStep, steps }) => (
  <Stepper
    activeColor="#F1557E"
    activeStep={currentStep}
    completeBarColor="#005656"
    completeColor="#39BCBC"
    size={24}
    steps={steps}
  />
)

export default BookingStepper

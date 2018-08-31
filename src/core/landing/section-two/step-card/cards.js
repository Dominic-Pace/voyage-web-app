import React from 'react'

import { Row } from 'react-bootstrap'
import StepCard from './'

const StepCards = ({ isMobileView }) => (
  <Row className="section-two">
    <StepCard
      description="Browse our pre-built packages and deals or create your own custom Search."
      icon="needAVacation"
      iconStyle={{
        marginBottom: -20,
        marginTop: -50
      }}
      isMobileView={isMobileView}
      step={1}
    />
    <StepCard
      description="Choose your perfect getaway. Customize it to your every wish."
      icon="travelBaggage"
      iconStyle={{
        marginTop: -35
      }}
      isMobileView={isMobileView}
      step={2}
    />
    <StepCard
      description="Invite others to join in on the vacation, split the cost, and pay over time. No need for a huge down payment right away!"
      icon="worldAwaits"
      iconStyle={{
        marginBottom: -20,
        marginTop: -50
      }}
      isMobileView={isMobileView}
      step={3}
    />
  </Row>
)

export default StepCards
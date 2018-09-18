import React from 'react'

import { Row } from 'react-bootstrap'
import StepCard from './'

const StepCards = ({ isMobileView }) => (
  <Row className="section-two">
    <StepCard
      description="Use Voyago's Price Guarantee service to get the absolute best price out there! You pay what we pay. Not only do we guarantee price, we guarantee that we'll book you on your trip for at most the price you enter in."
      icon="needAVacation"
      iconStyle={{
        marginBottom: -20,
        marginTop: -50
      }}
      isMobileView={isMobileView}
      step={1}
    />
    <StepCard
      description="We will find the absolute best prices for you out there and work with our affiliates to get you a stellar price. If we can't find you a better deal we'll give you $20 and book the trip for what you originally found it for!"
      icon="travelBaggage"
      iconStyle={{
        marginTop: -35
      }}
      isMobileView={isMobileView}
      step={2}
    />
    <StepCard
      description="After we're done booking for you, you can plan ideas for your entire trip on our website! What a win/win!"
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
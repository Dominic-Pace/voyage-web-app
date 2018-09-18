import React from 'react'

import { H1, Text } from '../../../../components/text'
import { RoundedButton } from '../../../../components/button'

import { Row } from 'react-bootstrap'


const SectionOneContent = ({ isMobileView }) => (
  <Row className="centered-container">
    <H1>Best Prices + Quality Travel Guaranteed!</H1>
    <Text center>
      We guarantee the absolute best price out there. If we don't find you a better price, we will book you for what
      you were expecting to pay AND give you $20! We will honor the top 7 booking websites out there:
      Expedia, Travelocity, Priceline, Kayak, Orbitz, Trip Advisor, and Booking.com. Don't believe us?
      Give us a try, we would love to earn your business!
    </Text>
    <RoundedButton
      className="top-section-btn"
      label="Build your own Getaway!"
      linkTo="/#build"
      transparent
      type="hashLink"
    />
    <RoundedButton
      className="top-section-btn"
      label="Browse Vacation Packages!"
      linkTo={`/${isMobileView ? '' : '#'}explore`}
      transparent
      type={isMobileView ? 'link' : 'hashLink'}
    />
  </Row>
)

export default SectionOneContent

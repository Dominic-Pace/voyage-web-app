import React from 'react'

import { H1, Text } from '../../../../components/text'
import { RoundedButton } from '../../../../components/button'

import { Row } from 'react-bootstrap'


const SectionOneContent = () => (
  <Row className="centered-container">
    <H1>Book your next getaway with us!</H1>
    <Text>Voyago's mission is to provide you with a service just as easy as booking a cruise, but anywhere in the world.
      We also strive to allow your getaways to be 100% customizable!
      All of this at a comparable price that you could book it on your own!
    </Text>
    <RoundedButton
      label="Build your own Getaway!"
      transparent
    />
  </Row>
)

export default SectionOneContent

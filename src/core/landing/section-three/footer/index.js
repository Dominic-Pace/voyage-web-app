import React from 'react'

import { H2, Text } from '../../../../components/text'
import { Row } from 'react-bootstrap'

const SectionThreeFooter = () => (
  <div>
    <Row className="package-footer">
      <H2 style={{ cursor: 'pointer' }}>View All Categories</H2>
    </Row>
    <Text
      center
      size={12}
      style={{ fontStyle: 'italic', paddingTop: 20 }}
    >
      *All prices are per day per customer
    </Text>
  </div>
)

export default SectionThreeFooter

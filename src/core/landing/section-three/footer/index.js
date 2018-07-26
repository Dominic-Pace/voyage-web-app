import React from 'react'

import { H2, Text } from '../../../../components/text'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SectionThreeFooter = () => (
  <div>
    <Row className="package-footer">
      <Link to="/explore">
        <H2 style={{
          color: 'white'
        }}>View All Packages</H2>
      </Link>
    </Row>
    <Text
      center
      size={12}
      style={{ fontStyle: 'italic', paddingTop: 20 }}
    >
      *All prices are per night per customer
    </Text>
  </div>
)

export default SectionThreeFooter

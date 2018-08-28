import React from 'react'

import Dining from './dining'
import { Row } from 'react-bootstrap'
import Shopping from './shopping'
import Transportation from './transportation'

const PackageAdditionalInfo = ({  }) => (
  <Row className="package-info-container">
    <Transportation />
    <Shopping />
    <Dining />
  </Row>
)

export default PackageAdditionalInfo

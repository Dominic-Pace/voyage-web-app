import React from 'react'

import Line from '../../../components/line'
import { Row } from 'react-bootstrap'

const PackageOverview = ({ currentPackage }) => (
  <Row className="package-overview-container">
    <Row className="package-overview-title">
      {currentPackage.name}
    </Row>
    <Row className="package-overview-desc">
      {currentPackage.description}
    </Row>
    <Line />
  </Row>
)

export default PackageOverview

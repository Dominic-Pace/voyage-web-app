import React from 'react'

import Line from '../../../components/line'
import { Row } from 'react-bootstrap'

const PackageOverview = ({ currentPackage }) => (
  <div
    style={{
      height: '150vh'
    }}
  >
    <Row className="package-overview-container">
      <Row className="package-overview-title">
        {currentPackage.name}
      </Row>
      <Row className="package-overview-desc">
        Description Here
      </Row>
      <Line />
    </Row>
  </div>
)

export default PackageOverview

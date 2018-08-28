import React from 'react'

import Icon from '../../../../components/icons'
import { Row } from 'react-bootstrap'

const DiningInfo = () => (
  <Row className="package-info-box">
    <div className="package-info-box-title-top">
      dining
    </div>
    <Icon
      size={132}
      type="food"
    />
    <div className="package-info-box-title">
      $100*
    </div>
    <div className="package-info-box-description">
      Plan on spending upwards of $100 on the delicious food here...Eat the best italian, sushi and korean food known to man!
    </div>
  </Row>
)

export default DiningInfo

import React from 'react'

import { Row } from 'react-bootstrap'
import Icon from "../../../../components/icons";

const ShoppingInfo = () => (
  <Row className="package-info-box">
    <div className="package-info-box-title-top">
      shopping
    </div>
    <Icon
      size={180}
      type="shopping"
    />
    <div className="package-info-box-title">
      $100*
    </div>
    <div className="package-info-box-description">
      We recommend bringing around $100 for this 4 day getaway for miscellaneous expenses!
    </div>
  </Row>
)

export default ShoppingInfo

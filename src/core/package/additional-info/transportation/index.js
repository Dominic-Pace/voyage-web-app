import React from 'react'

import { Row } from 'react-bootstrap'
import Icon from "../../../../components/icons";

const TransporationInfo = () => (
  <Row className="package-info-box">
    <div className="package-info-box-title-top">
      uber
    </div>
    <Icon
      size={132}
      type="uberFill"
    />
    <div className="package-info-box-title">
      $25*
    </div>
    <div className="package-info-box-description">
      We recommend uber to get from point A to point B! You will save the most money this way
    </div>
  </Row>
)

export default TransporationInfo

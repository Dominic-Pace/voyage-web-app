import React from 'react'

import { Col } from 'react-bootstrap'
import Icon from '../icons'

const AccommodationImage = ({ imageUrl, selected }) => (
  <Col
    className="wide-card-bg"
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
  >
    {
      selected &&
      <div className="wide-card-bg-selected">
        <Icon
          type="checkmark"
        />
      </div>
    }
  </Col>
)

export default AccommodationImage
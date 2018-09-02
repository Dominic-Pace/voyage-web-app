import React from 'react'

import { Col } from 'react-bootstrap'
import Icon from '../icons'

const AccommodationImage = ({ imageUrl, isMobileView, selected }) => (
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
          size={isMobileView ? 70 : null}
        />
      </div>
    }
  </Col>
)

export default AccommodationImage
import React from 'react'
import { Col } from 'react-bootstrap'

const FunImage = ({ imageUrl }) => (
  <Col
    className="fun-card-bg"
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
  />
)

export default FunImage
import React from 'react'
import { Col } from 'react-bootstrap'

const FunImage = ({ handleClick, imageUrl, name, }) => (
  <Col
    className="fun-card-bg"
    onClick={handleClick(name)}
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
  />
)

export default FunImage
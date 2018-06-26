import React from 'react'

import { H2, Text } from '../text'
import Rating from 'react-rating'
import { Row } from 'react-bootstrap'

import './styles.css'

const Card = ({ description, imageUrl, location, nightlyPrice, rating }) => (
  <div className="package-card">
    <div
      className="package-card-darken"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <H2 center className="package-card-name">{location}</H2>
      <div className="package-card-sale-tag">{`From $${nightlyPrice}*`}</div>
    </div>

    <div className="package-card-info-container">
      <Text>{description}</Text>
      <Row className="package-card-rating">
        <Rating
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          fractions={2}
          initialRating={rating}
          readonly
        />
      </Row>
    </div>
  </div>
)

export default Card

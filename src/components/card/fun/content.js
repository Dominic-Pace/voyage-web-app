import React from 'react'

import { Col, Grid, Row } from 'react-bootstrap'
import { H2 } from '../../text'
import Rating from 'react-rating'
import Tag from '../../tag'

const FunContent = ({ addOn }) => (
  <Grid className="fun-card-content">
    <Row>
      <H2
        bold
        className="fun-card-name"
        rowClassName="fun-card-name-container"
      >
        { addOn.name }
      </H2>
    </Row>
    <Row>
      <Col className="fun-card-content-left">
        <div className="fun-card-phone">
          { addOn.display_phone }
        </div>
        <Row className="fun-card-address">
          {
            addOn.location.display_address.map(address => (
              <div key={address}>{address}</div>
            ))
          }
        </Row>
        <Row className="fun-card-tags">
          {
            addOn.categories.map(category => (
              <Tag
                title={category.title}
              />
            ))
          }
        </Row>
      </Col>
      <Col className="fun-card-content-right">
        <div className="fun-card-map">
        </div>
        <div className="fun-card-rating-container">
        <span className="fun-card-rating">
          <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            fractions={2}
            initialRating={addOn.rating}
            readonly
          />
        </span>
          <span className="fun-card-rating-num">({addOn.review_count})</span>
        </div>
      </Col>
    </Row>
  </Grid>
)

export default FunContent
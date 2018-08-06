import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { H2 } from '../../text'
import Rating from 'react-rating'

const FunImage = ({ addOn }) => (
  <Col className="fun-card-content">
    <Col className="fun-card-content-left">
      <H2
        bold
        className="fun-card-name"
        rowClassName="fun-card-name-container"
      >
        { addOn.name }
      </H2>
      <div className="fun-card-phone">
        { addOn.display_phone }
      </div>
      <Row className="fun-card-address">
        {
          addOn.location.display_address.map(address => (
            <div>{address}</div>
          ))
        }
      </Row>
      <Row className="fun-card-tags">
        {
          addOn.categories.map(category => (
            <div className="fun-card-tags-card"> {category.title} </div>
          ))
        }
      </Row>
    </Col>
    <Col className="fun-card-content-right">
      <div className="fun-card-map">
      </div>
      <div className="fun-card-rating-container">
        <span className="package-footer-rating">
          <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            fractions={2}
            initialRating={addOn.rating}
            readonly
          />
        </span>
        <span className="package-footer-rating-num">({addOn.review_count})</span>
      </div>
    </Col>
  </Col>
)

export default FunImage
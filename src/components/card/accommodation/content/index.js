import React from 'react'

import { Col, Row } from 'react-bootstrap'
import { H1, H2, H3 } from '../../../text'
import Image from '../../../image'
import Rating from 'react-rating'
import Tag from '../../../tag'

const renderAccommodationName = accommodation =>
  accommodation.name ||
  `${accommodation.stars} Star ${accommodation.type} in ${accommodation.locationName}`

const renderAccommodationPrice = accommodation =>
  accommodation.name ?
    ''
    :
    `$${Math.round(accommodation.twoPersonPrice)}`

const AccommodationContent = ({ accommodation }) => (
  <Col className="accommodation-card-content">
    <Col className="accommodation-card-content-left">
      <Row>
         <span className="package-footer-rating">
          <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            fractions={2}
            initialRating={accommodation.stars}
            readonly
          />
        </span>
      </Row>
      {
        !accommodation.name
          ?
          <H2
            bold
            className="accommodation-card-name"
            rowClassName="accommodation-card-name-container"
          >
            {renderAccommodationName(accommodation)}
          </H2>
          :
          <H3
            bold
            className="accommodation-card-name"
            rowClassName="accommodation-card-name-container"
          >
            {renderAccommodationName(accommodation)}
          </H3>
      }
      <Row className="accommodation-card-tags-text">
        Could Be One of the following locations or similar:
      </Row>
      <Row className="accommodation-card-tags">
        {
          accommodation.couldBe &&
          accommodation.couldBe.map(similarPlace => (
            <Tag
              title={similarPlace.name}
            />
          ))
        }
      </Row>
    </Col>
    <Col className="accommodation-card-content-right">
      <Row className="accommodation-card-recommended">
        {
          accommodation.isRecommended &&
          <div className="accommodation-card-recommended-container">
            <Image image="logo" size={96} />
            <div className="accommodation-card-recommended-text">
              Voyago Recommended
            </div>
          </div>
        }
      </Row>
      <Row className="accommodation-card-price-container">
        <H1 bold center className="accommodation-card-price">
          {renderAccommodationPrice(accommodation)}
        </H1>
        {
          !accommodation.name &&
          <Row className="accommodation-card-per-night">
            PER NIGHT
          </Row>
        }
      </Row>
    </Col>
  </Col>
)

export default AccommodationContent
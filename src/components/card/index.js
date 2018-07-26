import React from 'react'

import {H2, Text} from '../text'
import Rating from 'react-rating'
import { Row } from 'react-bootstrap'

import './styles.css'
import { Link } from 'react-router-dom'

const renderCardBannerTag = (amountAvailable, nightlyPrice) => (
  amountAvailable
    ?
    `${amountAvailable} Packages Available!`
    :
    `From $${nightlyPrice} per night*`
)

const TagCard = ({ amountAvailable, description, imageUrl, location, nightlyPrice, rating }) => (
  <div className="tag-card">
    <div
      className="tag-card-darken"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <H2 center className="tag-card-name">{location}</H2>
      <div className="tag-card-sale-tag">{renderCardBannerTag(amountAvailable, nightlyPrice)}</div>
    </div>
    <div className="tag-card-info-container">
      <Text>{description}</Text>
      <Row className="tag-card-rating">
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

export const TitleCard = ({ children, image, linkTo }) => (
  <Link to={linkTo}>
    <div className="title-card">
      <div
        className="title-card-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
      </div>
      <div className="title-card-title">
        { children }
      </div>
    </div>
  </Link>
)

export default TagCard

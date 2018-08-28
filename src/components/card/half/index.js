import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

import HalfCardHeader from './header'

const getPriceTagSize = (pricePerPerson) => {
  if (pricePerPerson < 100 && pricePerPerson > 10) {
    return '30vw'
  } else if (pricePerPerson < 1000 && pricePerPerson > 100) {
    return '28vw'
  } else if  (pricePerPerson < 10000 && pricePerPerson > 1000) {
    return '27vw'
  } else {
    return '33vw'
  }
}

export const HalfSizeCard =
  ({
     beginDate,
     EndDate,
     imageUrl,
     lengthInDays,
     linkTo,
     locations,
     pricePerPerson,
     title,
   }) => (
    <Link to={linkTo}>
      <div
        className="half-card-bg"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <HalfCardHeader
          lengthInDays={lengthInDays}
          locations={locations}
          title={title}
        />
        <Row style={{ height: 100 }}/>
        <Row
          className="half-card-price"
          style={{
            marginLeft: getPriceTagSize(pricePerPerson),
          }}
        >
          <Col className="half-card-price-text-price">
            ${ Math.round(pricePerPerson) }
          </Col>
          <Col className="half-card-price-text-descr">
            <Row style={{
              fontSize: '1.8rem',
              margin: 0,
            }}
            >
              PER
            </Row>
            <Row
              style={{
                fontSize: '0.75rem',
                marginTop: '-10px',
                marginLeft: '2px',
              }}
            >
              PERSON
            </Row>
          </Col>
        </Row>
      </div>
    </Link>
  )

import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

import HalfCardHeader from './header'

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
    <Link className="half-card-container" to={linkTo}>
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
        <Row className="half-card-price">
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

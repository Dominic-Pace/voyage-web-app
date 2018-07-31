import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

import HalfCardHeader from './header'

const getPriceTagSize = (pricePerPerson) => {
  console.log(pricePerPerson < 100)
  console.log(pricePerPerson > 10)

  console.log('less than 100 & greater than 10', pricePerPerson < 100 && pricePerPerson > 10)
  console.log('less than 1000 & greater than 100', pricePerPerson < 1000 && pricePerPerson > 100)
  console.log('less than 10000 & greater than 1000', pricePerPerson < 10000 && pricePerPerson > 1000)

  if (pricePerPerson < 100 && pricePerPerson > 10) {
    console.log('less than 100 & greater than 10')
    return '31vw'
  } else if (pricePerPerson < 1000 && pricePerPerson > 100) {
    console.log('less than 1000 & greater than 100')
    return '29vw'
  } else if  (pricePerPerson < 10000 && pricePerPerson > 1000) {
    console.log('less than 10000 & greater than 1000')
    return '27vw'
  } else
  {
    console.log('less than 10')
    return '33vw'
  }
}

export const HalfSizeCard = ({
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
          marginLeft: getPriceTagSize(pricePerPerson * 5),
        }}
      >
        <Col className="half-card-price-text-price">
          ${ Math.round(pricePerPerson * 5) }
        </Col>
        <Col className="half-card-price-text-descr">
          <Row style={{
            fontSize: '1.8rem'
          }}
          >
            PER
          </Row>
          <Row
            style={{
              fontSize: '0.75rem',
              marginTop: '-10px',
              marginLeft: '-13px',
            }}
          >
            PERSON
          </Row>
        </Col>
      </Row>
    </div>
  </Link>
)

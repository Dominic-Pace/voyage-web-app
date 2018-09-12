import React from 'react'
import moment from 'moment'
import { getDayOfWeek } from '../../../utils/date'

import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HalfCardHeader from './header'

export const HalfSizeCard =
  ({
     beginDate,
     endDate,
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
        <Row className="half-card-bottom">
          <Col className="half-card-bottom-calendar">
            <Row className="half-card-bottom-calendar-container">
              {`${getDayOfWeek(beginDate)} ${moment(beginDate).format("MMM D, YYYY")}`}
            </Row>
            <Row className="half-card-bottom-calendar-container">
              <span style={{ paddingLeft: 10 }}>
                to
              </span>
            </Row>
            <Row className="half-card-bottom-calendar-container">
              {`${getDayOfWeek(endDate)} ${moment(endDate).format("MMM D, YYYY")}`}
            </Row>
          </Col>
          <Col className="half-card-bottom-price">
            <div className="half-card-bottom-price-container">
              <Col className="half-card-bottom-price-text">
                ${ Math.round(pricePerPerson) }
              </Col>
              <Col className="half-card-bottom-price-text-descr">
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
            </div>
          </Col>
        </Row>
      </div>
    </Link>
  )

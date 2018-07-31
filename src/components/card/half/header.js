import React from 'react'
import { H3 } from '../../text'
import { Col, Row } from 'react-bootstrap'

const HalfCardLengthSection = ({ lengthInDays, locations, title }) => (
  <Row className="half-card-header">
    <Col className="half-card-length">
      <div className="half-card-length-text">
        {lengthInDays}
      </div>
      <div className="half-card-length-text">
        DAYS
      </div>
    </Col>
    <Col className="half-card-">
      <H3 bold className="half-card-header-title">
        { title }
      </H3>
      <div className="half-card-location">
        <div className="half-card-location-text">
          Austin, TX to
        </div>
        {
          locations ?
            Object.keys(locations).map(location => (
              <div className="half-card-location-text">
                {`${locations[location]} to`}
              </div>
            ))
            :
            null
        }
        <div className="half-card-location-text">
          Austin, TX
        </div>
      </div>
    </Col>
  </Row>
)

export default HalfCardLengthSection

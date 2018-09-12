import React from 'react'
import moment from 'moment'
import { Col, Row } from 'react-bootstrap'
import { getDayOfWeek, getDateDiffFromToday } from '../../../../utils/date'

const ItineraryView = ({ trip }) => (
  <Row className="itinerary-days">
    <Col className="itinerary-days-range">
      {
        `${getDayOfWeek(trip.startDate)} ${moment(trip.startDate).format("MMM D, YYYY")} -
        ${getDayOfWeek(trip.endDate)} ${moment(trip.endDate).format("MMM D, YYYY")}`
      }
    </Col>
    <Col className="itinerary-days-away">
      {`Only ${Math.abs(getDateDiffFromToday(trip.startDate)) + 1} Days Away!!!`}
    </Col>
  </Row>
)

export default ItineraryView

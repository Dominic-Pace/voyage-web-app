import React from 'react'
import moment from 'moment'

import { Row } from 'react-bootstrap'
import Spinner from 'react-spinkit'

import Title from '../title'
import { TitleCard } from '../../../components/card'

const UpcomingTrips = ({ trips }) => (
  <div className="dashboard-upcoming-container">
    <Title>Upcoming Trips</Title>
    <Row>
      {
        trips
          ?
          Object.values(trips).map(trip => (
            <TitleCard
              image={trip.imageUrl}
              linkTo={`/trip/${trip.id}`}
              upcoming
            >
              <div className="dashboard-upcoming-trip-title">
                {trip.requestedAccommodation.location}
              </div>
              <div className="dashboard-upcoming-trip-date">
                {`Starting: ${moment(trip.startDate).format("MMM Do, YYYY")}`}
              </div>
              <div className="dashboard-upcoming-trip-date">
                {`Ending: ${moment(trip.endDate).format("MMM Do, YYYY")}`}
              </div>
            </TitleCard>
          ))
          :
          <Spinner name="three-bounce" />
      }
    </Row>
  </div>
)

export default UpcomingTrips

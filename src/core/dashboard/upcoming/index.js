import React from 'react'

import Title from '../title'
import { TitleCard } from '../../../components/card'

const UpcomingTrips = () => (
    <div className="dashboard-upcoming-container">
      <Title>Upcoming Trips</Title>
      <TitleCard
        image="http://eric.bodyworkbiz.com/wp-content/uploads/2014/07/dream-destination-39676.jpg"
        linkTo={`/trip`}
        upcoming
      >
        <div className="dashboard-upcoming-trip-title">
          Polynesian Islands
        </div>
        <div className="dashboard-upcoming-trip-date">
          Starting: Sep 25, 2018
        </div>
        <div className="dashboard-upcoming-trip-date">
          Ending: Sep 30, 2018
        </div>
      </TitleCard>
    </div>
)

export default UpcomingTrips

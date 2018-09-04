import React from 'react'

import ItineraryView from './itinerary'
import JustBooked from './just-booked'

import './styles.css'

const TripOverview = () => (
  <React.Fragment>
    {
      <ItineraryView />
    }
  </React.Fragment>
)

export default TripOverview

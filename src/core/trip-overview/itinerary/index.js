import React from 'react'
import { Grid } from 'react-bootstrap'

import DaysUntil from './days-until'
import ItineraryBanner from './banner'
import ItineraryDayCard from './day'

import { mockItinerary } from './mock'

const ItineraryView = () => (
  <Grid className="itinerary-container">
    <ItineraryBanner />
    <DaysUntil />
    <ItineraryDayCard itinerary={mockItinerary} />
  </Grid>
)

export default ItineraryView

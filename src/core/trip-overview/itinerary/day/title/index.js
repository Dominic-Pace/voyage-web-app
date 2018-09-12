import React from 'react'

import { getDayOfWeek } from '../../../../../utils/date'

const ItineraryDayTitle = ({ day, index }) => (
  <div className="itinerary-group-title-container">
    <div className="itinerary-group-title-day-number">
      {`Day ${index}`}
    </div>
    <div className="itinerary-group-title-day">
      {getDayOfWeek(day.date)}
    </div>
  </div>
)

export default ItineraryDayTitle

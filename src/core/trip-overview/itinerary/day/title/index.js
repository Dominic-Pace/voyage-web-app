import React from 'react'
import moment from 'moment'

const renderDayOfWeek = dayOfWeek => {
  switch(dayOfWeek) {
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    case 7:
      return 'Sunday'
    default:
      return ''
  }
}
const ItineraryDayTitle = ({ day, index }) => (
  <div className="itinerary-group-title-container">
    <div className="itinerary-group-title-day-number">
      {`Day ${index}`}
    </div>
    <div className="itinerary-group-title-day">
      {renderDayOfWeek(moment(day.date).day())}
    </div>
  </div>
)

export default ItineraryDayTitle

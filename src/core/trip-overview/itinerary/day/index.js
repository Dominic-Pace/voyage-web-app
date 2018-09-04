import React from 'react'
import moment from 'moment'

import EventCard from './event'
import InBetween from './in-between'
import Title from './title'

const getHoursBetween = (startTime, nextTime) => {
  const timeDiff = moment.duration(moment(nextTime).diff(moment(startTime)))

  const diffInHours = Math.floor(timeDiff.asHours())
  const diffInMin = timeDiff.asMinutes() % 60

  if (diffInHours >= 1) {
    return `${Math.floor(diffInHours)}h ${diffInMin}m`
  }
  return `${diffInMin}m`
}

const ItineraryDayCard = ({ itinerary }) => (
  <div className="itinerary-group-container">
    {
      itinerary && itinerary.map((day, index) => (
        <React.Fragment>
          <Title day={day} index={index + 1} />
          {
            day.events.map((event, index) => (
              <React.Fragment>
                <EventCard event={event}/>
                {
                  (day.events.length !== index + 1)
                  ?
                    <InBetween>
                      {getHoursBetween(event.startTime, day.events[index + 1].startTime)}
                    </InBetween>
                    :
                    null
                }
              </React.Fragment>
            ))
          }
        </React.Fragment>
      ))
    }
  </div>
)

export default ItineraryDayCard

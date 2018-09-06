import React from 'react'
import moment from 'moment'

import { Row } from 'react-bootstrap'
import Icon, { getTypeText } from '../../icon'

const EventCard = ({ event, handleClick }) => (
  <div className="itinerary-group-event-container" onClick={() => { handleClick(event)}}>
    <Row className="itinerary-group-event-title">
      {event.name}
    </Row>
    <Row style={{ alignItems: 'center' }}>
      <Icon className="itinerary-group-event-icon" type={event.type} size={48}/>
      <div className="itinerary-group-event-text">
        {`${moment(event.startTime).format("hh:mm a")} -`}
      </div>
      <div className="itinerary-group-event-type">
        {getTypeText(event.type)}
      </div>
    </Row>
    <Row style={{ alignItems: 'center' }}>
      <div className="itinerary-group-event-description">
        {event.description}
      </div>
    </Row>
    <Row className="itinerary-group-event-price">
      {event.pricePerPerson.price ? `$${event.pricePerPerson.price} for ${event.pricePerPerson.for}` : null}
    </Row>
  </div>
)

export default EventCard

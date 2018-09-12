import React from 'react'
import { H1 } from '../../../../components/text'

const ItineraryBanner = ({ trip }) => (
  <div
    className="itinerary-banner"
    style={{ backgroundImage: `url(${trip.imageUrl})` }}
  >
    <H1
      bold
      center
      color="#FFF"
      rowClassName="itinerary-banner-title-container"
      style={{
        fontSize: '3rem',
        textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        {trip.location.name}
      </div>
    </H1>
  </div>
)

export default ItineraryBanner

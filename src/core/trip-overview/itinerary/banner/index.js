import React from 'react'
import { H1 } from '../../../../components/text/index'

const ItineraryBanner = () => (
  <div
    className="itinerary-banner"
    style={{ backgroundImage: `url(https://cdn-images-1.medium.com/max/1330/1*_6EdJgpcWyeWne36eFH7eA@2x.jpeg)` }}
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
        San Diego, CA
      </div>
    </H1>
  </div>
)

export default ItineraryBanner

import React from 'react'

import { Col, Grid, Row } from 'react-bootstrap'
import { H1 } from '../../../components/text'
import Map from '../../../components/map'

import '../styles.css'

const ReviewView = ({ currentPackage, selectedAccommodation, selectedActivities }) => {
  console.log('Current Package', currentPackage)
  console.log('Selected Accommodations', selectedAccommodation)
  console.log('Selected Activities', selectedActivities)
  return (
    <Grid className="booking-review-container">
      <Row
        className="booking-review-header-image"
        style={{ backgroundImage: `url(${currentPackage.imageUrl})`}}
      >
        <H1
          bol
          center
          color="#FFF"
          rowClassName="booking-review-header-text-container"
          style={{
            textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
          }}
        >
          Review Your Order
        </H1>
      </Row>
        <Map
          selectedActivities={selectedActivities}
        />
    </Grid>
  )
}

export default ReviewView

import React from 'react'

import { Col, Grid, Row } from 'react-bootstrap'
import { H1 } from '../../../components/text'
import Map from '../../../components/map'

import '../styles.css'
import { ReviewCard } from '../../../components/card'

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
          bold
          center
          color="#FFF"
          rowClassName="booking-review-header-image-row"
          style={{
            textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
          }}
        >
          Review Your Order
        </H1>
      </Row>
      <Row className="booking-review-activities-container">
        <Row className="booking-review-activities-title">
          <H1
            bold
            center
            rowClassName="booking-review-activities-title-row"
          >
            Activities You're Interested In
          </H1>
          <div className="booking-review-activities-line" />
        </Row>
        {
          selectedActivities
            ?
            selectedActivities.map(activity => (
              <ReviewCard
                categories={activity.categories}
                imageUrl={activity.image_url}
                name={activity.name}
              />
            ))
            :
            null
        }
      </Row>
      <Map
        selectedActivities={selectedActivities}
      />
    </Grid>
  )
}

export default ReviewView

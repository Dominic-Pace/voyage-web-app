import React from 'react'

import { Grid, Row } from 'react-bootstrap'
import { H1 } from '../../../components/text'
import Map from '../../../components/map'

import '../styles.css'
import { ReviewCard } from '../../../components/card'
import { AccommodationCard } from '../../../components/card/accommodation'

const ReviewView = ({ currentPackage, forms, numOfPeople, selectedAccommodation, selectedActivities }) => {

  let passengers = []

  for (let i = 0; i < numOfPeople; i++) {
    passengers.push(forms.forms[`travelerInfo${i}`])
  }

  console.log('current location', currentPackage)
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
          <div style={{ textAlign: 'center' }}>
            Confirm your purchase of
          </div>
          <div>
            {currentPackage.name}
          </div>
        </H1>
      </Row>
      <Row className="booking-review-activities-container">
        <Row className="booking-review-activities-title">
          <H1
            bold
            center
            rowClassName="booking-review-activities-title-row"
          >
            Where You'd Like To Stay
          </H1>
          <div className="booking-review-activities-line" />
        </Row>
        <AccommodationCard
          accommodation={selectedAccommodation}
          numOfPeople={numOfPeople}
          selected={true}
        />
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
        centerOfMap={{ lat: currentPackage.mapLat, lng: currentPackage.mapLong }}
        selectedActivities={selectedActivities}
      />
      <Row className="booking-review-passengers-title-container">
        <Row className="booking-review-passengers-title">
          <H1
            bold
            center
            rowClassName="booking-review-passengers-title-row"
          >
            Confirm Passenger Information
          </H1>
          <div className="booking-review-passengers-line" />
        </Row>
        <Row className="booking-review-passengers-container">
          {
            passengers.map((passenger, key) => (
              <div className="booking-review-passengers-card">
                <div className="booking-review-passengers-card-title">
                  {`Passenger ${key + 1}`}
                </div>
                <Row className="booking-review-passengers-row">
                  <span className="booking-review-passengers-bold-title">
                    Full name:
                  </span>
                  <span>
                    {`${passenger.firstName.value} ${passenger.lastName.value}`}
                  </span>
                </Row>
                <Row className="booking-review-passengers-row">
                  <span className="booking-review-passengers-bold-title">
                    Date of Birth:
                  </span>
                  <span>
                    {passenger.birthday.value}
                  </span>
                </Row>
                <Row className="booking-review-passengers-row">
                  <span className="booking-review-passengers-bold-title">
                    Email:
                  </span>
                  <span>
                    {passenger.email.value || 'None Supplied'}
                  </span>
                </Row>
                <Row className="booking-review-passengers-row">
                  <span className="booking-review-passengers-bold-title">
                    Phone Number:
                  </span>
                  <span>
                    {passenger.phone.value || 'None Supplied'}
                  </span>
                </Row>
              </div>
            ))
          }
        </Row>
      </Row>
    </Grid>
  )
}

export default ReviewView

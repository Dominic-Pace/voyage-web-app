import React from 'react'

import { AccommodationCard } from '../../../components/card/accommodation'
import { Grid } from 'react-bootstrap'

import '../styles.css'

class AccommodationView extends React.Component {
  componentWillMount() {
    const { accommodations, handleAccommodationClick, selectedAccommodation } = this.props
    if (!selectedAccommodation) {
      const defaultAccommodation = accommodations.find(accommodation => {
        return accommodation.isDefault && accommodation
      })
      handleAccommodationClick(defaultAccommodation)
    }
  }

  renderAccommodationCard = (accommodation, handleAccommodationClick, numOfPeople, selectedAccommodation) => (
    <AccommodationCard
      accommodation={accommodation}
      handleClick={handleAccommodationClick}
      numOfPeople={numOfPeople}
      selected={selectedAccommodation && (accommodation.id === selectedAccommodation.id)}
    />
  )

  render() {
    const { accommodations, handleAccommodationClick, numOfPeople, selectedAccommodation } = this.props
    return (
      <Grid className="booking-view-container">
        {
          accommodations.map(accommodation => {
            if (accommodation.name) {
              return this.renderAccommodationCard(accommodation, handleAccommodationClick, numOfPeople, selectedAccommodation)
            }
            if (numOfPeople <= 2) {
              if (accommodation.twoPersonPrice) {
                return this.renderAccommodationCard(accommodation, handleAccommodationClick, numOfPeople, selectedAccommodation)
              }
            } else {
              if (accommodation.threeToFourPersonPrice) {
                return this.renderAccommodationCard(accommodation, handleAccommodationClick, numOfPeople, selectedAccommodation)
              }
            }
          })
        }
      </Grid>
    )
  }
}

export default AccommodationView

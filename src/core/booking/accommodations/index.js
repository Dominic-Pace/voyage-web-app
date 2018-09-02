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

  renderAccommodationCard = accommodation => {
    const { handleAccommodationClick, isMobileView, numOfPeople, selectedAccommodation } = this.props
    return (
      <AccommodationCard
        accommodation={accommodation}
        handleClick={handleAccommodationClick}
        isMobileView={isMobileView}
        numOfPeople={numOfPeople}
        selected={selectedAccommodation && (accommodation.id === selectedAccommodation.id)}
      />
    )
  }

  render() {
    const { accommodations, numOfPeople } = this.props
    return (
      <Grid className="booking-view-container">
        {
          accommodations.map(accommodation => {
            if (accommodation.name) {
              return this.renderAccommodationCard(accommodation)
            }
            if (numOfPeople <= 2) {
              if (accommodation.twoPersonPrice) {
                return this.renderAccommodationCard(accommodation)
              }
            } else {
              if (accommodation.threeToFourPersonPrice) {
                return this.renderAccommodationCard(accommodation)
              }
            }
          })
        }
      </Grid>
    )
  }
}

export default AccommodationView

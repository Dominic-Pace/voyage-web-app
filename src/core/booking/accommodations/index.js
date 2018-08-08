import React from 'react'

import { AccommodationCard } from '../../../components/card/accommodation'
import { Grid } from 'react-bootstrap'

import '../styles.css'

class AccommodationView extends React.Component {
  componentWillMount() {
    const { accommodations, handleAccommodationClick } = this.props
    const defaultAccommodation = accommodations.find(accommodation => {
      return accommodation.isDefault && accommodation
    })
    handleAccommodationClick(defaultAccommodation)
  }

  render() {
    const { accommodations, handleAccommodationClick, numOfPeople, selectedAccommodation } = this.props
    return (
      <Grid className="booking-view-container">
        {
          accommodations.map(accommodation => {
            return <AccommodationCard
              accommodation={accommodation}
              handleClick={handleAccommodationClick}
              numOfPeople={numOfPeople}
              selected={accommodation.id === selectedAccommodation.id}
            />
          })
        }
      </Grid>
    )
  }
}

export default AccommodationView

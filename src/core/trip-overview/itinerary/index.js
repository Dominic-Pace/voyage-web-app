import React from 'react'
import { Grid } from 'react-bootstrap'

import DaysUntil from './days-until'
import ItineraryBanner from './banner'
import ItineraryDayCard from './day'
import ItineraryEventForm from './day/event/form'
import Modal from '../../../components/modal'

import { mockItinerary } from './mock'

class ItineraryView extends React.Component {
  state = {
    selectedEvent: {},
    show: false,
  }

  handleEventClick = (selectedEvent) => {
    this.setState({
      selectedEvent,
      show: true,
    })
  }

  handleModalClose = () => {
    this.setState({
      selectedEvent: {},
      show: false,
    })
  }

  handleModalSave = () => {
    console.log('saved!')
    this.setState({
      selectedEvent: {},
      show: false,
    })
  }

  render() {
    const { selectedEvent } = this.state
    const { isMobileView, trip } = this.props
    return (
      <Grid className="itinerary-container">
        <ItineraryBanner isMobileView={isMobileView} trip={trip} />
        <DaysUntil trip={trip} />
        <ItineraryDayCard
          handleEventClick={this.handleEventClick}
          itinerary={mockItinerary}
          trip={trip}
        />
        <Modal
          handleClose={this.handleModalClose}
          handleSave={this.handleModalSave}
          show={this.state.show}
          title="Update Itinerary"
        >
          <ItineraryEventForm
            event={selectedEvent}
          />
        </Modal>
      </Grid>
    )
  }
}

export default ItineraryView

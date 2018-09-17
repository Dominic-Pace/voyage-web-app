import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { sortBy } from 'lodash'
import * as actions from './actions'

import ItineraryView from './itinerary'
import JustBooked from './just-booked'
import Spinner from 'react-spinkit'

import './styles.css'

class TripOverview extends React.Component {
  componentDidMount() {
    const { location } = this.props
    const tripId = location.pathname.split("/trip/")[1]
    const userId = localStorage.getItem('voyagoUser')

    this.props.fetchUpcomingTripById(userId, tripId)
  }

  formatTripToArray = () => {
    let trip = {}
    if (this.props.currentTrip) {
      trip = this.props.currentTrip
      trip.itinerary = Object.values(trip.itinerary)
      let days = []

      trip.itinerary.map(day => {
        day.events =
          sortBy(Object.values(day.events), dayEvent => moment(dayEvent.startTime))

        days.push(day)
      })
      trip.itinerary = days

      return trip
    }
  }

  render() {
    const { currentTrip, isMobileView } = this.props
    return (
      <React.Fragment>
        {
          currentTrip
            ?
            <ItineraryView isMobileView={isMobileView} trip={this.formatTripToArray()}/>
            :
            <Spinner name="three-bounce" />
        }
      </React.Fragment>
    )
  }
}


const mapStateToProps = ({ auth, dashboard, explore, trips }) => {
  const { isMobileView } = auth
  const { categories } = dashboard
  const {
    isRequesting,
    packages,
  } = explore
  const { currentTrip } = trips
  return {
    categories,
    currentTrip,
    isMobileView,
    isRequesting,
    packages,
  }
}
export default connect(mapStateToProps, { ...actions })(TripOverview)

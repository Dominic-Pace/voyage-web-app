import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../package/actions'
import * as _ from 'lodash'
import { calculatePrice, getDifferenceInDays } from '../../utils/date'

import AccommodationsView from './accommodations'
import ActivitiesView from './activities'
import CheckoutFooter from '../../components/checkout-footer'
import { Grid } from 'react-bootstrap'
import PaymentView from './payment'
import ReviewView from './review'
import Spinner from 'react-spinkit'
import Stepper from './stepper'

import './styles.css'

class BookPackage extends React.Component {
  state = {
    currentStep: 0,
    locationName: '',
    numOfPeople: 4,
    selectedAccommodation: {},
    selectedActivities: [],
  }

  steps = [
    {
      href: '',
      title: 'Brainstorm Activities',
      onClick: (e) => {
        e.preventDefault()
        this.setState({ currentStep: 0 })
      }
    }, {
      href: '',
      title: 'Select Accommodations',
      onClick: (e) => {
        e.preventDefault()
        this.setState({ currentStep: 1 })
      }
    }, {
      href: '',
      title: 'Payment Options',
      onClick: (e) => {
        e.preventDefault()
        this.setState({ currentStep: 2 })
      }
    }, {
      title: 'Review Order',
      onClick: (e) => {
        e.preventDefault()
        this.setState({ currentStep: 3 })
      }
    }
  ]

  componentWillMount() {
    this.props.fetchYelpTags()
    this.props.fetchPackageById(this.normalizeLocationPathname()).then(() => {
      const locations = this.props.currentPackage.locations
      if (_.size(locations) === 1) {
        this.setState({ locationName: locations.location1 })
        this.props.fetchThingsToDo(locations.location1, null)
      } else {
        this.setState({ locationName: locations.location2 })
        this.props.fetchThingsToDo(locations.location2, null)
      }
    }).then(() => {
      this.props.fetchAccommodations(this.props.currentPackage.accommodations || [])
    })
  }

  calculateCheckoutPrice = () => {
    const { numOfPeople, selectedAccommodation } = this.state
    const { currentPackage } = this.props
    let price = 0

    if (selectedAccommodation.name) {
      return currentPackage.flightPrice
    }
    if (numOfPeople <= 2) {
      price =
        currentPackage.flightPrice +
        (
          (selectedAccommodation.twoPersonPrice * getDifferenceInDays(currentPackage.startDate, currentPackage.endDate)
          ) / numOfPeople
        )
    } else if (numOfPeople >= 2 && numOfPeople <=4) {
      price =
        currentPackage.flightPrice +
        (
          (selectedAccommodation.threeToFourPersonPrice * getDifferenceInDays(currentPackage.startDate, currentPackage.endDate)
          ) / numOfPeople
        )
    } else {
      return 10000
    }

    return price
  }

  handleActivitySelect = activityId => {
    const { selectedActivities } = this.state
    if ((selectedActivities.indexOf(activityId) > -1)) {
      this.setState(prevState => ({
        selectedActivities: [
          ...prevState.selectedActivities.slice(0, prevState.selectedActivities.indexOf(activityId)),
          ...prevState.selectedActivities.slice(prevState.selectedActivities.indexOf(activityId) + 1)
        ]
      }))
    } else {
      this.setState(prevState => ({
        selectedActivities: [...prevState.selectedActivities, activityId]
      }))
    }
  }

  handleAccommodationSelect = accommodation => {
    this.setState({ selectedAccommodation: accommodation })
  }

  normalizeLocationPathname = () => window.location.pathname.replace('/booking/', '')

  onClickNext = () => {
    const { currentStep } = this.state
    this.setState({
      currentStep: currentStep + 1,
    })
  }

  renderCheckoutContent = () => {
    const {
      accommodations,
      isRequesting,
      thingsToDo,
      yelpTags
    } = this.props

    const {
      currentStep,
      locationName,
      numOfPeople,
      selectedAccommodation,
      selectedActivities
    } = this.state

    if (isRequesting) {
      return (
        <div className="spinner-container">
          <Spinner name="three-bounce" />
        </div>
      )
    }

    switch(currentStep) {
      case 0:
        return <ActivitiesView
          handleActivityClick={activityId => { this.handleActivitySelect(activityId) }}
          handleFilterClick={category => {this.props.fetchThingsToDo(locationName, category)}}
          selectedActivities={selectedActivities}
          thingsToDo={thingsToDo}
          yelpTags={yelpTags}
        />
      case 1:
        return <AccommodationsView
          accommodations={accommodations}
          handleAccommodationClick={accommodation => { this.handleAccommodationSelect(accommodation) }}
          numOfPeople={numOfPeople}
          selectedAccommodation={selectedAccommodation}
        />
      case 2:
        return <PaymentView />
      case 3:
      default:
        return <ReviewView />
    }
  }

  render() {
    const { currentPackage } = this.props
    const { currentStep } = this.state
    return (
      <div>
        {
          currentPackage ?
            <Grid className="booking-container">
              <Stepper
                currentStep={currentStep}
                steps={this.steps}
              />
              { this.renderCheckoutContent() }
              <CheckoutFooter
                buttonLabel={(currentStep === 3) ? 'Complete Order' : 'Next'}
                currentPackage={currentPackage}
                onButtonClick={this.onClickNext}
                checkoutPrice={calculatePrice(currentPackage.validStartingAt, this.calculateCheckoutPrice())}
              />
            </Grid>
            :
            <Spinner name="three-bounce" />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ travelPackage }) => {
  const {
    accommodations,
    currentPackage,
    isRequesting,
    selectedActivities,
    thingsToDo,
    yelpTags,
  } = travelPackage
  return {
    accommodations,
    currentPackage,
    isRequesting,
    selectedActivities,
    thingsToDo,
    yelpTags,
  }
}
export default connect(mapStateToProps, { ...actions })(BookPackage)
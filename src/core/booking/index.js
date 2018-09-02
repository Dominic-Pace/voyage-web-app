import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../package/actions'
import * as _ from 'lodash'
import { calculatePrice, getDifferenceInDays } from '../../utils/date'

import AccommodationsView from './accommodations'
import ActivitiesView from './activities'
import CheckoutFooter from '../../components/checkout-footer'
import { Grid } from 'react-bootstrap'
import TravelerInfoView from './traveler-info'
import ReviewView from './review'
import Spinner from 'react-spinkit'
import Stepper from './stepper'

import './styles.css'

class BookPackage extends React.Component {
  state = {
    currentStep: 0,
    locationName: '',
    numOfPeople: 4,
    selectedAccommodation: undefined,
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
      title: 'Traveler Information',
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
        this.props.fetchThingsToDo(locations.location1, null, this.props.currentPackage.recommendedThingsToDo)
      } else {
        this.setState({ locationName: locations.location2 })
        this.props.fetchThingsToDo(locations.location2, null, this.props.currentPackage.recommendedThingsToDo)
      }
    }).then(() => {
      this.props.fetchAccommodations(this.props.currentPackage.accommodations || [])
    })
  }

  calculateCheckoutPrice = () => {
    const {numOfPeople, selectedAccommodation} = this.state
    const {currentPackage} = this.props
    let price = 0

    if (selectedAccommodation) {
      if (selectedAccommodation.name) {
        return currentPackage.flightPrice + currentPackage.otherPrice || 0
      }

      if (numOfPeople <= 2) {
        price =
          currentPackage.flightPrice +
          (
            (selectedAccommodation.twoPersonPrice * getDifferenceInDays(currentPackage.startDate, currentPackage.endDate)
            ) / numOfPeople
          )
      } else {
        price =
          currentPackage.flightPrice +
          (
            (selectedAccommodation.threeToFourPersonPrice * getDifferenceInDays(currentPackage.startDate, currentPackage.endDate)
            ) / numOfPeople
          )
      }
      return price + currentPackage.otherPrice || 0
    }
  }

  handleAccommodationSelect = accommodation => {
    this.setState({ selectedAccommodation: accommodation })
  }

  handleActivitySelect = activity => {
    const { selectedActivities } = this.state
    if (selectedActivities.find(addOn => addOn.id === activity.id)) {
      this.setState(prevState => ({
        selectedActivities: prevState.selectedActivities.filter(addOn => addOn.id !== activity.id)
      }))
    } else {
      this.setState(prevState => ({
        selectedActivities: [...prevState.selectedActivities, activity]
      }))
    }
  }

  handleCompleteOrderClick = () => {
    this.props.history.push('/')
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
      currentPackage,
      forms,
      isMobileView,
      isRequesting,
      profileData,
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
          isMobileView={isMobileView}
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
        return <TravelerInfoView
          forms={forms}
          numOfPeople={numOfPeople}
        />
      case 3:
      default:
        return <ReviewView
          currentPackage={currentPackage}
          forms={forms}
          numOfPeople={numOfPeople}
          profileData={profileData || {}}
          selectedAccommodation={selectedAccommodation}
          selectedActivities={selectedActivities}
        />
    }
  }

  render() {
    const { currentPackage } = this.props
    const { currentStep, numOfPeople } = this.state
    return (
      <React.Fragment>
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
                currentStep={currentStep}
                handleNumOfPeopleSelect={selectedOption => { this.setState({ numOfPeople: selectedOption.value })}}
                numOfPeople={numOfPeople}
                onButtonClick={(currentStep === 3) ? this.handleCompleteOrderClick : this.onClickNext}
                checkoutPrice={calculatePrice(currentPackage.validStartingAt, this.calculateCheckoutPrice())}
              />
            </Grid>
            :
            <Spinner name="three-bounce" />
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ auth, forms, travelPackage, userProfile }) => {
  const { isMobileView } = auth
  const {
    accommodations,
    currentPackage,
    isRequesting,
    selectedActivities,
    thingsToDo,
    yelpTags,
  } = travelPackage
  const { profileData } = userProfile
  return {
    accommodations,
    currentPackage,
    forms,
    isMobileView,
    isRequesting,
    profileData,
    selectedActivities,
    thingsToDo,
    yelpTags,
  }
}
export default connect(mapStateToProps, { ...actions })(BookPackage)
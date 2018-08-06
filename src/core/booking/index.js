import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../package/actions'
import * as _ from 'lodash'

import AccommodationsView from './accommodations'
import AddOnsView from './add-ons'
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
    this.props.fetchPackageById(this.normalizeLocationPathname()).then(() => {
      const locations = this.props.currentPackage.locations
      if (_.size(locations) === 1) {
        this.props.fetchThingsToDo(locations.location1)
      } else {
        this.props.fetchThingsToDo(locations.location2)
      }
    })
  }

  normalizeLocationPathname = () => window.location.pathname.replace('/booking/', '')

  onClickNext = () => {
    const { currentStep } = this.state
    this.setState({
      currentStep: currentStep + 1,
    })
  }

  renderCheckoutContent = () => {
    const { thingsToDo } = this.props
    const { currentStep } = this.state
    switch(currentStep) {
      case 0:
        return <AddOnsView thingsToDo={thingsToDo}/>
      case 1:
        return <AccommodationsView />
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
    currentPackage,
    isRequesting,
    thingsToDo,
  } = travelPackage
  return {
    currentPackage,
    isRequesting,
    thingsToDo,
  }
}
export default connect(mapStateToProps, { ...actions })(BookPackage)
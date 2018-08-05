import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../package/actions'

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
      title: 'Add-ons',
      onClick: (e) => {
        e.preventDefault()
        this.setState({ currentStep: 0 })
      }
    }, {
      href: '',
      title: 'Accommodations',
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
    this.props.fetchPackageById(this.normalizeLocationPathname())
  }

  normalizeLocationPathname = () => window.location.pathname.replace('/booking/', '')

  onClickNext = () => {
    const { currentStep } = this.state
    this.setState({
      currentStep: currentStep + 1,
    })
  }

  renderCheckoutContent = () => {
    const { currentStep } = this.state

    switch(currentStep) {
      case 0:
        return <AddOnsView />
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
  } = travelPackage
  return {
    currentPackage,
    isRequesting,
  }
}
export default connect(mapStateToProps, { ...actions })(BookPackage)
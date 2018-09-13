import React from 'react'
import { connect } from 'react-redux'
import * as _ from 'lodash'
import * as actions  from './actions'

import AdditionalInfo from './additional-info'
import Banner from './banner'
import Footer from '../../components/checkout-footer'
import { Grid } from 'react-bootstrap'
import Overview from './overview'
import RecommendedActivities from './recommended-activities'
import SampleItinerary from './sample-itinerary'
import Spinner from 'react-spinkit'

import './styles.css'

class PackageView extends React.Component {
  componentWillMount() {
    this.props.fetchPackageById(this.normalizeLocationPathname()).then(() => {
      const locations = _.get(this.props, 'currentPackage.locations', [])
      const recommendedThingsToDo = _.get(this.props, 'currentPackage.recommendedThingsToDo', [])
      if (_.size(locations) === 1) {
        this.setState({ locationName: locations.location1 })
        this.props.fetchThingsToDo(locations.location1, null, recommendedThingsToDo)
      } else {
        this.setState({ locationName: locations.location2 })
        this.props.fetchThingsToDo(locations.location2, null, recommendedThingsToDo)
      }
    })
  }

  normalizeLocationPathname = () => window.location.pathname.replace('/package/', '')

  render() {
    const {
      currentPackage,
      isAuthed,
      isMobileView,
      recommendedThingsToDo,
      updateLoginRoute,
    } = this.props

    return (
      <React.Fragment>
        {
          currentPackage ?
            <Grid className="package-container">
              <Banner
                currentPackage={currentPackage}
                isMobileView={isMobileView}
              />
              <Overview
                currentPackage={currentPackage}
              />
              <SampleItinerary
                currentPackage={currentPackage}
                isMobileView={isMobileView}
              />
              <RecommendedActivities
                recommendedThingsToDo={recommendedThingsToDo}
              />
              <AdditionalInfo />
              <div className="package-info-warning">
                *All additional costs are estimates and are NOT required to book. They are simply recommendations per person and are based on a 4 person trip.
              </div>
              <Footer
                buttonLabel="Book Now"
                buttonType="hashLink"
                currentPackage={currentPackage}
                nextBtnSize={isMobileView ? '55%' : '30%'}
                isAuthed={isAuthed}
                isMobileView={isMobileView}
                onButtonClick={() => { !isAuthed && updateLoginRoute(this.props.location.pathname.replace('package', 'booking')) }}
              />
            </Grid>
            :
            <Spinner name="three-bounce" />
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ auth, travelPackage }) => {
  const {
    currentPackage,
    isRequesting,
    recommendedThingsToDo,
  } = travelPackage
  const {
    isAuthed,
    isMobileView,
  } = auth
  return {
    currentPackage,
    isAuthed,
    isMobileView,
    isRequesting,
    recommendedThingsToDo,
  }
}
export default connect(mapStateToProps, { ...actions })(PackageView)


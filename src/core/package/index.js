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
import { toast } from 'react-toastify'

import './styles.css'

class PackageView extends React.Component {
  componentWillMount() {
    this.props.fetchPackageById(this.normalizeLocationPathname()).then(() => {
      const locations = this.props.currentPackage.locations
      if (_.size(locations) === 1) {
        this.setState({ locationName: locations.location1 })
        this.props.fetchThingsToDo(locations.location1, null, this.props.currentPackage.recommendedThingsToDo)
      } else {
        this.setState({ locationName: locations.location2 })
        this.props.fetchThingsToDo(locations.location2, null, this.props.currentPackage.recommendedThingsToDo)
      }
    })
  }

  normalizeLocationPathname = () => window.location.pathname.replace('/package/', '')

  render() {
    const { currentPackage, isAuthed, recommendedThingsToDo } = this.props
    return (
      <React.Fragment>
        {
          currentPackage ?
            <Grid className="package-container">
              <Banner currentPackage={currentPackage}/>
              <Overview
                currentPackage={currentPackage}
              />
              <SampleItinerary
                currentPackage={currentPackage}
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
                isAuthed={isAuthed}
                onButtonClick={() => {
                  !isAuthed && toast.info('In order to plan a trip, please login or register!')
                }}
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
  } = auth
  return {
    currentPackage,
    isAuthed,
    isRequesting,
    recommendedThingsToDo,
  }
}
export default connect(mapStateToProps, { ...actions })(PackageView)


import React from 'react'
import { connect } from 'react-redux'
import * as actions  from './actions'

import Banner from './banner'
import Footer from '../../components/checkout-footer'
import { Grid } from 'react-bootstrap'
import Overview from './overview'
import Spinner from 'react-spinkit'
import { toast } from 'react-toastify'

import './styles.css'

class PackageView extends React.Component {
  componentWillMount() {
    this.props.fetchPackageById(this.normalizeLocationPathname())
    this.props.fetchThingsToDo('San Diego, CA')
  }

  normalizeLocationPathname = () => window.location.pathname.replace('/package/', '')

  render() {
    const { currentPackage, isAuthed } = this.props
    return (
      <div>
        {
          currentPackage ?
            <Grid className="package-container">
              <Banner currentPackage={currentPackage}/>
              <Overview
                currentPackage={currentPackage}
              />
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
      </div>
    )
  }
}

const mapStateToProps = ({ auth, travelPackage }) => {
  const {
    currentPackage,
    isRequesting,
  } = travelPackage
  const {
    isAuthed,
  } = auth
  return {
    currentPackage,
    isAuthed,
    isRequesting,
  }
}
export default connect(mapStateToProps, { ...actions })(PackageView)


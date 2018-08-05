import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import Spinner from 'react-spinkit'
import * as actions  from './actions'

import Banner from './banner'
import Footer from './footer'

import './styles.css'
import {calculatePrice} from "../../utils/date";

class PackageView extends React.Component {
  componentWillMount() {
    this.props.fetchPackageById(this.normalizeLocationPathname())
  }

  normalizeLocationPathname = () => window.location.pathname.replace('/package/', '')

  render() {
    const { currentPackage } = this.props
    return (
      <div>
        {
          currentPackage ?
            <Grid className="package-container">
              <Banner currentPackage={currentPackage}/>
              <div
                style={{
                  height: '150vh'
                }}
              >
                Test
              </div>
              <Footer currentPackage={currentPackage} />
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
export default connect(mapStateToProps, { ...actions })(PackageView)


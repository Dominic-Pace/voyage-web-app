import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import * as actions  from './actions'

import Banner from './banner'

import './styles.css'

class PackageView extends React.Component {
  componentWillMount() {
    this.props.fetchPackageById(this.normalizeLocationPathname())
  }

  normalizeLocationPathname() {
    return window.location.pathname.replace('/package/', '')
  }

  render() {
    const { currentPackage } = this.props
    return (
      <Grid className="package-container">
        <Banner
          currentPackage={currentPackage}
        />
        <div
          style={{
            height: '150vh'
          }}>
          Test
        </div>
      </Grid>
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


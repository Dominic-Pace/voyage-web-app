import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'

import * as actions  from './actions'
import Banner from './banner'
import Packages from './packages'

import './styles.css'

class ExploreView extends React.Component {
  componentWillMount() {
    this.props.fetchPackages()
    this.props.fetchFilters()
  }

  render() {
    const { filters, isRequesting, packages } = this.props
    return (
      <Grid className="explore-container">
        <Banner filters={filters} />
        <Packages
          loading={isRequesting}
          packages={packages}
        />
      </Grid>
    )
  }
}

const mapStateToProps = ({ explore }) => {
  const {
    filters,
    packages,
    isRequesting,
  } = explore
  return {
    filters,
    packages,
    isRequesting,
  }
}
export default connect(mapStateToProps, { ...actions })(ExploreView)


import React from 'react'
import { connect } from 'react-redux'

import * as actions  from './actions'
import Packages from './packages'

import './styles.css'
import { Grid } from 'react-bootstrap'

class ExploreView extends React.Component {
  componentWillMount() {
    this.props.fetchPackages()
  }

  render() {
    const { packages } = this.props
    return (
      <Grid className="explore-container">
        <Packages
          packages={packages}
        />
      </Grid>
    )
  }
}

const mapStateToProps = ({ explore }) => {
  const {
    packages,
    isRequesting,
  } = explore
  return {
    packages,
    isRequesting,
  }
}
export default connect(mapStateToProps, { ...actions })(ExploreView)


import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import * as actions  from './actions'

import Banner from './banner'

import './styles.css'

class PackageView extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
      <Grid className="package-container">
        <Banner
          image="https://images.pexels.com/photos/926560/pexels-photo-926560.png"
          lowPrice={41}
          title="Long weekend in San Diego"
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
export default connect(mapStateToProps, { ...actions })(PackageView)


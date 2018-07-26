import React from 'react'
import { connect } from 'react-redux'

import * as actions  from './actions'
import Banner from './banner'
import Packages from './packages'

import './styles.css'
import { Grid } from 'react-bootstrap'

class ExploreView extends React.Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  render() {
    const { featuredCategories } = this.props
    return (
      <Grid className="explore-container">
        <Banner
          categories={featuredCategories}
        />
      </Grid>
    )
  }
}

const mapStateToProps = ({ explore }) => {
  const {
    categories,
    featuredCategories,
    isRequesting,
  } = explore
  return {
    categories,
    featuredCategories,
    isRequesting,
  }
}
export default connect(mapStateToProps, { ...actions })(ExploreView)


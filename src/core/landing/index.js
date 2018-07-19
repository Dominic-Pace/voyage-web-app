import React from 'react'
import { connect } from 'react-redux'

import * as actions  from './actions'

import SectionOne from './section-one'
import SectionTwo from './section-two'
import SectionThree from './section-three'
import SectionFour from './section-four'
import SectionFive from './section-five'
import SectionSix from './section-six'

import './styles.css'
class LandingPage extends React.Component {
  componentWillMount() {
    this.props.fetchFeaturedPackages()
  }
  render() {
    const { featuredPackages } = this.props
    return (
      <div>
        <SectionOne />
        <SectionTwo />
        <SectionThree
          packages={featuredPackages}
        />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </div>
    )
  }
}

const mapStateToProps = ({ travelCategories }) => {
  const {
    packages,
    featuredPackages,
    isRequesting,
  } = travelCategories
  return {
    packages,
    featuredPackages,
    isRequesting,
  }
}
export default connect(mapStateToProps, { ...actions })(LandingPage)

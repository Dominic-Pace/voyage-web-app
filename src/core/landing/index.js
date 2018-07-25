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

  handleCustomVacationClick = () => {
    const { customPackage } = this.props
    this.props.sendCustomVacationEmail(customPackage)
  }

  render() {
    const { featuredPackages } = this.props
    return (
      <div>
        <SectionOne />
        <SectionFour
          handleSubmitClick={this.handleCustomVacationClick}
        />
        <SectionFive />
        <SectionSix />
      </div>
    )
  }
}

const mapStateToProps = ({ forms, travelCategories }) => {
  const {
    packages,
    featuredPackages,
    isRequesting,
  } = travelCategories
  const {
    customPackage,
  } = forms
  return {
    customPackage,
    featuredPackages,
    isRequesting,
    packages,

  }
}
export default connect(mapStateToProps, { ...actions })(LandingPage)

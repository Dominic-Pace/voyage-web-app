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
    this.props.fetchFeaturedLocations()
  }

  handleCustomVacationClick = () => {
    const { customPackage } = this.props
    this.props.sendCustomVacationEmail(customPackage)
  }

  handleJoinEmailListClick = () => {
    const { joinMail } = this.props
    this.props.sendJoinEmailList(joinMail.email)
  }

  handleContactUsClick = () => {
    const { contactUs } = this.props
    this.props.sendContactUs(contactUs)
  }

  render() {
    const { featuredLocations } = this.props
    return (
      <div>
        <SectionOne />
        <SectionTwo />
        <SectionThree
          locations={featuredLocations}
        />
        <SectionFour
          handleSubmitClick={this.handleCustomVacationClick}
        />
        <SectionFive
          handleSubmitClick={this.handleJoinEmailListClick}
        />
        <SectionSix
          handleSubmitClick={this.handleContactUsClick}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ forms, homepage }) => {
  const {
    packages,
    featuredLocations,
    isRequesting,
  } = homepage
  const {
    contactUs,
    customPackage,
    joinMail,
  } = forms
  return {
    contactUs,
    customPackage,
    featuredLocations,
    isRequesting,
    joinMail,
    packages,
  }
}
export default connect(mapStateToProps, { ...actions })(LandingPage)

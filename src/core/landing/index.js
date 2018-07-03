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
  componentDidMount() {
    this.props.fetchHomepageCategories()
  }
  render() {
    console.log('props', this.props)
    return (
      <div>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </div>
    )
  }
}

const mapStateToProps = ({ homepage }) => {
  const {
    isRequesting,
  } = homepage
  return {
    isRequesting,
  }
}
export default connect(mapStateToProps, { ...actions })(LandingPage)

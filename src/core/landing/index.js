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
    this.props.fetchHomepageCategories()
  }
  render() {
    const { categories } = this.props
    return (
      <div>
        <SectionOne />
        <SectionTwo />
        <SectionThree
          categories={categories}
        />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </div>
    )
  }
}

const mapStateToProps = ({ homepage }) => {
  const {
    categories,
    isRequesting,
  } = homepage
  return {
    categories,
    isRequesting,
  }
}
export default connect(mapStateToProps, { ...actions })(LandingPage)

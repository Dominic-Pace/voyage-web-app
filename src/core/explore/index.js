import React from 'react'
import { connect } from 'react-redux'

import * as actions  from './actions'
import Banner from './banner'

import './styles.css'

class ExploreView extends React.Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  render() {
    const { featuredCategories } = this.props
    return (
      <div className="explore-container">
        <Banner
          categories={featuredCategories}
        />
      </div>
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


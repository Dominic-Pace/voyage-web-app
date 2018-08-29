import React from 'react'
import connect from 'react-redux/es/connect/connect'
import * as actions from './actions'

import UpcomingTrips from './upcoming'

import './styles.css'
import Title from "./title";


class DashboardView extends React.Component {
  componentDidMount() {
    this.props.fetchFeaturedCategories()
  }

  render () {
    const { categories } = this.props
    return (
      <div className="dashboard-container">
        <UpcomingTrips />
        {
          categories && categories.map(category =>(
            <div className="dashboard-upcoming-container">
              <Title>{category.name}</Title>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({ dashboard }) => {
  const { categories } = dashboard
  return {
    categories,
  }
}
export default connect(mapStateToProps, { ...actions })(DashboardView)

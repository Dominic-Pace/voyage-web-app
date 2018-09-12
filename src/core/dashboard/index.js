import React from 'react'
import { connect } from 'react-redux'
import { filter } from 'lodash'
import * as actions from './actions'
import { calculatePackagePrice, getDifferenceInDays } from '../../utils/date'

import { HalfSizeCard } from '../../components/card'
import Title from './title'
import UpcomingTrips from './upcoming'

import './styles.css'

class DashboardView extends React.Component {
  componentDidMount() {
    this.props.fetchFeaturedCategories()
    if (!this.props.packages) {

    }
    this.props.fetchPackages()
  }

  render () {
    const { categories, packages, user } = this.props
    return (
      <div className="dashboard-container">
        <UpcomingTrips trips={user.trips} />
        {
          (packages && categories) && categories.map(category =>(
            <div className="dashboard-section-container">
              <Title>{category.name}</Title>
              <div className="dashboard-featured-container">
                {
                  filter(
                    packages,
                    travelPackage => travelPackage.categoryTag.includes(category.id)
                  ).map(featuredPackage => (
                    <HalfSizeCard
                      beginDate={featuredPackage.startDate}
                      endDate={featuredPackage.endDate}
                      imageUrl={featuredPackage.imageUrl}
                      key={featuredPackage.name}
                      lengthInDays={getDifferenceInDays(featuredPackage.startDate, featuredPackage.endDate)}
                      linkTo={`/package/${featuredPackage.id}`}
                      locations={featuredPackage.locations}
                      pricePerPerson={calculatePackagePrice(featuredPackage)}
                      title={featuredPackage.name}
                    />
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({ auth, dashboard, explore }) => {
  const { user } = auth
  const { categories } = dashboard
  const {
    isRequesting,
    packages,
  } = explore
  return {
    categories,
    isRequesting,
    packages,
    user,
  }
}
export default connect(mapStateToProps, { ...actions })(DashboardView)

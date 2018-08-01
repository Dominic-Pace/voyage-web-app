import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'

import * as actions  from './actions'
import Banner from './banner'
import Packages from './packages'

import './styles.css'

class ExploreView extends React.Component {
  componentWillMount() {
    this.props.fetchPackages()
    this.props.fetchFilters()
  }

  filterPackages() {
    const { packages } = this.props
    let filterId = window.location.pathname.replace('/explore/', '')

    const filteredPackages = []

    if (filterId === '/explore') {
      return packages
    } else {
      packages ?
        packages.find(travelPackage => {
          travelPackage.categoryTag.find(category => {
            if(category === Number(filterId)) {
              filteredPackages.push(travelPackage)
            }
          })
          travelPackage.locationTag.find(location => {
            if(location === Number(filterId)) {
              filteredPackages.push(travelPackage)
            }
          })
        })
        :
        null

      return filteredPackages
    }
  }

  getCurrentFilter() {
    const { filters } = this.props
    let filterId = window.location.pathname.replace('/explore/', '')

    const currentFilter =
      filters
        ? filters.find(filter => filter.id === Number(filterId))
        : { name: '' }

    if (filterId === '/explore') {
      return 'Featured'
    } else {
      return currentFilter.name
    }
  }

  render() {
    const { filters } = this.props
    return (
      <Grid className="explore-container">
        <Banner filters={filters} />
        <Packages
          currentFilter={this.getCurrentFilter()}
          packages={this.filterPackages()}
        />
      </Grid>
    )
  }
}

const mapStateToProps = ({ explore }) => {
  const {
    filters,
    packages,
    isRequesting,
  } = explore
  return {
    filters,
    packages,
    isRequesting,
  }
}
export default connect(mapStateToProps, { ...actions })(ExploreView)


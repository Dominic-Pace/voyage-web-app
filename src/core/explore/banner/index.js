import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

import { H2 } from '../../../components/text'
import { Row } from 'react-bootstrap'
import { TitleCard } from '../../../components/card'

const renderFilters = filters => {
  if (filters) {
    return filters.map(filter => (
      <TitleCard
        image={filter.coverImageUrl}
        key={`category-${filter.name}`}
        linkTo={`/explore${ filter.id ? '/' + filter.id : ''}`}
        selected={
          window.location.pathname.includes(filter.id) ||
          (filter.name === 'Show Featured' && window.location.pathname === '/explore')
        }
      >
        { filter.name }
      </TitleCard>
    ))
  }
  return null
}

const ExploreBanner = ({ filters, isMobileView }) => (
  <Row className="explore-banner">
    <H2>Filter By Location or Category</H2>
    {
      isMobileView
      ?
        <div className="explore-mobile-banner-categories">
          { renderFilters(filters) }
        </div>
        :
        <HorizontalScroll
          className="explore-banner-categories"
          reverseScroll
        >
          { renderFilters(filters) }
        </HorizontalScroll>
    }
  </Row>
)

export default ExploreBanner

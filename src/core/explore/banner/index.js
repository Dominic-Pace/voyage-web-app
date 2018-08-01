import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

import { H2 } from '../../../components/text'
import { Row } from 'react-bootstrap'
import { TitleCard } from '../../../components/card'

const ExploreBanner = ({ filters }) => (
  <Row className="explore-banner">
    <H2>Filter By Location or Category</H2>
    <HorizontalScroll
      className="explore-banner-categories"
      reverseScroll
    >
      {
        filters ?
          filters.map(filter => (
            <TitleCard
              image={filter.coverImageUrl}
              key={`category-${filter.name}`}
              linkTo={`/explore${ filter.id ? '/' + filter.id : ''}`}
            >
              { filter.name }
            </TitleCard>
          ))
          :
          null

      }
    </HorizontalScroll>
  </Row>
)

export default ExploreBanner

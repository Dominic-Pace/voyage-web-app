import React from 'react'

import { H2 } from '../../../components/text'
import { Row } from 'react-bootstrap'
import { TitleCard } from '../../../components/card'

const ExploreBanner = ({ filters }) => (
  <Row className="explore-banner">
    <H2>Categories</H2>
    <Row className="explore-banner-categories">
      {
        filters ?
          filters.map(filter => (
            <TitleCard
              image={filter.coverImageUrl}
              key={`category-${filter.name}`}
              linkTo={`/explore/${filter.id}`}
            >
              { filter.name }
            </TitleCard>
          ))
          :
          null

      }
    </Row>
  </Row>
)

export default ExploreBanner

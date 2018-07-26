import React from 'react'

import { H2 } from '../../../components/text'
import { Row } from 'react-bootstrap'
import { TitleCard } from '../../../components/card'

const ExploreBanner = ({ categories }) => (
  <Row className="explore-banner">
    <H2>Categories</H2>
    <Row className="explore-banner-categories">
      {
        categories ?
          categories.map(category => (
            <TitleCard
              image={category.categoryImage}
              key={`category-${category.categoryName}`}
              linkTo={`/explore/${category.id}`}
            >
              { category.categoryName }
            </TitleCard>
          ))
          :
          null

      }
    </Row>
  </Row>
)

export default ExploreBanner

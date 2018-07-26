import React from 'react'
import BannerHeader  from './header'
import { TitleCard } from '../../../components/card'
import { Row } from 'react-bootstrap'

const ExploreView = ({ categories }) => (
  <div className="explore-banner">
    <BannerHeader />
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
  </div>
)

export default ExploreView
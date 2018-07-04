import React from 'react'

import PackageCard  from '../../../../components/card'
import { Row } from 'react-bootstrap'

const SectionThreeSlider = ({ categories }) => (
  <Row>
    {
      categories ?
        categories.map(featuredCategory => (
          <PackageCard
            amountAvailable={8}
            imageUrl={featuredCategory.categoryImage}
            location={featuredCategory.categoryName}
            nightlyPrice={89}
            rating={3.7}
          />
        ))
        :
        null
    }
  </Row>
)

export default SectionThreeSlider

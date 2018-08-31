import React from 'react'

import PackageCard  from '../../../../components/card'
import { Row } from 'react-bootstrap'

const SectionThreeSlider = ({ isMobileView, locations }) => (
  <Row>
    {
      locations ?
        locations.map(featuredLocation => {
          console.log('is mobile?', isMobileView)
          return (
              <PackageCard
                imageUrl={featuredLocation.coverImageUrl}
                linkTo={`/explore/${featuredLocation.id}`}
                location={featuredLocation.name}
                nightlyPrice={featuredLocation.startingAtPrice || 0}
                rating={3.7}
              />
            )
          }
        )
        :
        null
    }
  </Row>
)

export default SectionThreeSlider

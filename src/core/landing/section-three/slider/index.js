import React from 'react'

import PackageCard  from '../../../../components/card'
import { Row } from 'react-bootstrap'

const SectionThreeSlider = ({ locations }) => (
  <Row>
    {
      locations ?
        locations.map(featuredLocation => (
          <PackageCard
            imageUrl={featuredLocation.coverImageUrl}
            linkTo={`/package/${featuredLocation.id}`}
            location={featuredLocation.name}
            nightlyPrice={featuredLocation.currentLowPrice || 0}
            rating={3.7}
          />
        ))
        :
        null
    }
  </Row>
)

export default SectionThreeSlider

import React from 'react'

import PackageCard  from '../../../../components/card'
import { Row } from 'react-bootstrap'

const SectionThreeSlider = ({ packages }) => (
  <Row>
    {
      packages ?
        packages.map(featuredPackage => (
          <PackageCard
            imageUrl={featuredPackage.imageUrl}
            location={featuredPackage.name}
            nightlyPrice={featuredPackage.currentLowPrice}
            rating={3.7}
          />
        ))
        :
        null
    }
  </Row>
)

export default SectionThreeSlider

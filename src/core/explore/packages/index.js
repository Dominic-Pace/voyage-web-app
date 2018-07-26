import React from 'react'

import { H2 } from '../../../components/text'
import { Row } from 'react-bootstrap'
import PackageCard from '../../../components/card'

const Packages = ({ packages }) => (
  <Row className="explore-packages">
    <H2>Voyago's Prebuilt Packages</H2>
    <Row className="explore-banner-categories">
      {
        packages ?
          packages.map(travelPackage => (
            <PackageCard
              imageUrl={travelPackage.imageUrl}
              linkTo={`/package/${travelPackage.id}`}
              location={travelPackage.name}
              nightlyPrice={travelPackage.currentLowPrice}
              rating={3.7}
            />
          ))
          :
          null
      }
    </Row>
  </Row>
)

export default Packages

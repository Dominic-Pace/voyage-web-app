import React from 'react'

import { H2 } from '../../../components/text'
import { Row } from 'react-bootstrap'
import { HalfSizeCard } from '../../../components/card'

const locations = [
  'Albequerque, NM',
  'Santa Fe, NM'
]

const Packages = ({ packages }) => (
  <Row className="explore-packages">
    <H2>Voyago's Prebuilt Packages</H2>
    <Row className="explore-banner-categories">
      {
        packages ?
          packages.map(travelPackage => (
            <HalfSizeCard
              imageUrl={travelPackage.imageUrl}
              key={travelPackage.name}
              lengthInDays={5}
              linkTo={`/package/${travelPackage.id}`}
              locations={locations}
              pricePerPerson={travelPackage.currentLowPrice}
              title={travelPackage.name}
            />
          ))
          :
          null
      }
    </Row>
  </Row>
)

export default Packages

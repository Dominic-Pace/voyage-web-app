import React from 'react'

import { H2 } from '../../../components/text'
import { Row } from 'react-bootstrap'
import { HalfSizeCard } from '../../../components/card'

const locations = [
  'Albequerque, NM',
  'Santa Fe, NM'
]

const getDifferenceInDays = (startDate, endDate) => {
  let timeDiff = Math.abs(new Date(startDate).getTime() - new Date(endDate).getTime())
  return Math.ceil(timeDiff / (1000 * 3600 * 24))
}

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
                lengthInDays={getDifferenceInDays(travelPackage.startDate, travelPackage.endDate)}
                linkTo={`/package/${travelPackage.id}`}
                locations={travelPackage.locations}
                pricePerPerson={travelPackage.startingPrice}
                title={travelPackage.name}
              />
            )
          )
          :
          null
      }
    </Row>
  </Row>
)

export default Packages
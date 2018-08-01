import React from 'react'
import Spinner from 'react-spinkit'

import { H2 } from '../../../components/text'
import { Row } from 'react-bootstrap'
import { HalfSizeCard } from '../../../components/card'

const getDifferenceInDays = (startDate, endDate) => {
  let timeDiff = Math.abs(new Date(startDate).getTime() - new Date(endDate).getTime())
  return Math.ceil(timeDiff / (1000 * 3600 * 24))
}

const Packages = ({ currentFilter, packages }) => (
  <Row className="explore-packages" componentClass="explore-packages-row">
    <H2 className="explore-header">{`Browsing ${currentFilter} Packages`}</H2>
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
          <Spinner name="three-bounce" />
      }
    </Row>
  </Row>
)

export default Packages

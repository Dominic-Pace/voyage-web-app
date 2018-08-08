import React from 'react'
import { Row } from 'react-bootstrap'
import Spinner from 'react-spinkit'
import { calculatePackagePrice, getDifferenceInDays } from '../../../utils/date'

import { H2 } from '../../../components/text'
import { HalfSizeCard } from '../../../components/card'
import ErrorImage from '../../../components/error-image'

const Packages = ({ currentFilter, packages }) => (
  <Row className="explore-packages" componentClass="explore-packages-row">
    <H2 className="explore-header">{`Browsing ${currentFilter} Packages`}</H2>
    <Row className="explore-banner-categories">
      {
        packages ?
          packages.length
            ?
            packages.map(travelPackage => (
                <HalfSizeCard
                  imageUrl={travelPackage.imageUrl}
                  key={travelPackage.name}
                  lengthInDays={getDifferenceInDays(travelPackage.startDate, travelPackage.endDate)}
                  linkTo={`/package/${travelPackage.id}`}
                  locations={travelPackage.locations}
                  pricePerPerson={calculatePackagePrice(travelPackage)}
                  title={travelPackage.name}
                />
              )
            )
            :
            <ErrorImage
              message="There are no packages in this category available, please try to filter by another category or location."
              titleMessage="No Packages Available :("
            />
          :
          <Spinner name="three-bounce" />
      }
    </Row>
  </Row>
)

export default Packages

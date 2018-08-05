import React from 'react'
import Spinner from 'react-spinkit'
import { calculatePrice } from '../../../utils/date'

import { H1 } from '../../../components/text'

const ExploreBanner = ({ currentPackage }) => (
  <div>
    {
      currentPackage
        ?
        <div
          className="package-banner"
          style={{ backgroundImage: `url(${currentPackage.imageUrl})` }}
        >
          <H1 className="package-banner-price">
            { `Starting At $${Math.round(calculatePrice(currentPackage))}!` }
          </H1>
          <H1 className="package-banner-title">
            { currentPackage.name }
          </H1>
        </div>
        :
        <Spinner name="three-bounce" />
    }

  </div>
)

export default ExploreBanner

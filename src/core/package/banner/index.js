import React from 'react'

import { H1 } from '../../../components/text'

const ExploreBanner = ({ image, lowPrice, title }) => (
  <div
    className="package-banner"
    style={{ backgroundImage: `url(${image})` }}
  >
    <H1 className="package-banner-price">
      { `As low as $${lowPrice}!` }
    </H1>
    <H1 className="package-banner-title">
      { title }
    </H1>

  </div>
)

export default ExploreBanner

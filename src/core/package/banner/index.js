import React from 'react'

import {H1, H2} from '../../../components/text'
import {Grid, Row} from 'react-bootstrap'
import { TitleCard } from '../../../components/card'

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

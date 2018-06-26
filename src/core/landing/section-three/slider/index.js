import React from 'react'

import PackageCard  from '../../../../components/card'
import { Row } from 'react-bootstrap'

const SectionThreeSlider = () => (
  <Row>
    <PackageCard
      imageUrl="https://images.pexels.com/photos/462370/pexels-photo-462370.jpeg"
      location="Seattle, WA"
      nightlyPrice={89}
      rating={3.7}
    />
    <PackageCard
      imageUrl="https://images.pexels.com/photos/414136/pexels-photo-414136.jpeg"
      location="Phoenix, AZ"
      nightlyPrice={78}
      rating={4.4}
    />
  </Row>
)

export default SectionThreeSlider

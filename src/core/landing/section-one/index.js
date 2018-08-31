import React from 'react'
import { isMobileView } from '../../../utils/device'

import Banner from '../../../components/banner'
import SectionOneContent  from './content'

import { Grid } from 'react-bootstrap'

import SectionOneBanner from '../../../assets/images/landing/one-banner.jpg'

const SECTION_HEIGHT = isMobileView() ? 500 : 600

const SectionOne = () => (
  <Banner
    bgImage={SectionOneBanner}
    height={SECTION_HEIGHT}
  >
    <Grid>
      <SectionOneContent />
    </Grid>
  </Banner>
)

export default SectionOne

import React from 'react'

import Banner from '../../../components/banner'
import { RoundedButton } from '../../../components/button'

import { Col, Grid, Row } from 'react-bootstrap'

import SectionOneBanner from '../../../assets/images/landing/one-banner.jpg'

const SECTION_HEIGHT = 600
const SectionOne = () => (
  <Banner
    bgImage={SectionOneBanner}
    height={SECTION_HEIGHT}
  >
    <Grid>
      <Row>
        <Col className="centered-container" md={6}>
          <RoundedButton
            label="Explore Pre Built Getaways"
          />
        </Col>
        <Col className="centered-container" md={6}>
          <RoundedButton
            label="Build your own Getaway!"
            transparent
          />
        </Col>
      </Row>
    </Grid>
  </Banner>
)

export default SectionOne

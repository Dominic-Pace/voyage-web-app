import React from 'react'

import { Col, Row } from 'react-bootstrap'
import Line from '../../../components/line'
import {H1} from "../../../components/text";

const PackageSampleItinerary = ({ currentPackage, isMobileView }) => (
  <div className="package-itinerary-container">
    <H1 center rowClassName="package-itinerary-title">Sample Itinerary</H1>
    <Line width={isMobileView ? '50vw' : '20vw'} />
    {
      currentPackage.sampleDays.map((sampleDay, key) => (
        <React.Fragment>
          <Row className="package-itinerary-card-container">
            <Col className="package-itinerary-day">
              {`DAY ${key + 1}`}
            </Col>
            <div className="package-itinerary-desc" dangerouslySetInnerHTML={{__html: sampleDay.sampleItinerary}}/>
          </Row>
          <Line width="70vw"/>
        </React.Fragment>
      ))
    }
  </div>
)

export default PackageSampleItinerary

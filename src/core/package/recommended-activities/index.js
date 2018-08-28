import React from 'react'

import { H1 } from '../../../components/text'
import { ReviewCard } from '../../../components/card'
import { Row } from 'react-bootstrap'
import Line from "../../../components/line";

const RecommendedActivities = ({ recommendedThingsToDo }) => (
  <Row className="package-activities-container">
    <Row className="package-activities-title">
      <H1
        center
        rowClassName="package-activities-title-row"
      >
        Voyago's Recommendations
      </H1>
      <Line style={{ marginBottom: 40 }} width="50vw"/>
    </Row>
    {
      recommendedThingsToDo
        ?
        recommendedThingsToDo.map(activity => (
          <ReviewCard
            categories={activity.categories}
            imageUrl={activity.image_url}
            name={activity.name}
            selected={false}
          />
        ))
        :
        null
    }
  </Row>
)

export default RecommendedActivities

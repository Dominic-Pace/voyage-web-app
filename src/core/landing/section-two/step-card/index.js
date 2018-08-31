import React from 'react'

import { H1, Text } from '../../../../components/text'
import Icon from '../../../../components/icons'

import { Col, Row } from 'react-bootstrap'

const StepCard = ({ description, icon, iconStyle, step }) => (
  <Col className="section-two-step-card" md={3}>
    <Row>
      <H1
        rowClassName="landing-step-num"
        color="#C7C7C7"
        bold
      >
        { step }
      </H1>
      <Icon
        size={300}
        style={iconStyle}
        type={icon}
      />
    </Row>
    <Row>
      <Text
        color="#949494"
        style={{ fontStyle: 'italic' }}
      >
        { description }
      </Text>
    </Row>
  </Col>
)

export default StepCard

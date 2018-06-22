import React from 'react'

import { Col, Row } from 'react-bootstrap'

const BrandContent = () => (
  <Col
    className="footer-content-container"
    md={3}
  >
    <Row style={{ justifyContent: 'center', paddingTop: 20 }}>
      <span className="voyago-footer-text">
        VOYA
        <span className="voyago-footer-text-go">
          GO
        </span>
      </span>
    </Row>
  </Col>
)

export default BrandContent

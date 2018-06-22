import React from 'react'

import { Col } from 'react-bootstrap'
import Image from '../../../../../components/image'

const MenuContent = () => (
  <Col
    className="footer-content-container"
    md={4}
  >
    <Image
      className="voyago-footer-logo"
      image="logo"
      alt="Voyago Logo"
    />
  </Col>
)

export default MenuContent

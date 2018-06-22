import React from 'react'

import { Row } from 'react-bootstrap'

const CopyrightContent = () => (
    <Row className="footer-text">
      © Voyago {(new Date()).getFullYear()} - All Rights Reserved
    </Row>
)

export default CopyrightContent

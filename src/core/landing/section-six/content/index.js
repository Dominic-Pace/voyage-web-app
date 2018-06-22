import React from 'react'

import { Row } from 'react-bootstrap'
import ContactContent from './contact'
import CopyrightContent from './copyright'
import BrandContent from './brand'
import MenuContent from './menu'
import SocialContent from './social'

const SectionSixContent = () => (
  <div className="footer-content">
    <Row>
      <BrandContent />
      <MenuContent />
      <ContactContent />
    </Row>
    <SocialContent />
    <CopyrightContent />
  </div>
)

export default SectionSixContent

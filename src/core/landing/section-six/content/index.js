import React from 'react'

import { Row } from 'react-bootstrap'
import BrandContent from './brand'
import ContactContent from './contact'
import CopyrightContent from './copyright'
import MadeContent from './made'
import MenuContent from './menu'
import SocialContent from './social'

const SectionSixContent = ({ handleSubmitClick }) => (
  <div className="footer-content">
    <Row>
      <BrandContent />
      <MenuContent />
      <ContactContent
        handleSubmitClick={handleSubmitClick}
      />
    </Row>
    <SocialContent />
    <MadeContent />
    <CopyrightContent />
  </div>
)

export default SectionSixContent

import React from 'react'

import { Row } from 'react-bootstrap'
import BrandContent from './brand'
import ContactContent from './contact'
import CopyrightContent from './copyright'
import MadeContent from './made'
import MenuContent from './menu'
import SocialContent from './social'
import SectionThree from "../../section-three";

const SectionSixContent = ({ contactUs, handleSubmitClick, isMobileView }) => (
  <div className="footer-content">
    <Row>
      <BrandContent />
      <MenuContent />
      <ContactContent
        contactUs={contactUs}
        handleSubmitClick={handleSubmitClick}
        isMobileView={isMobileView}
      />
    </Row>
    <SocialContent />
    <MadeContent />
    <CopyrightContent />
  </div>
)

export default SectionSixContent

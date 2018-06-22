import React from 'react'

import { Col, Row } from 'react-bootstrap'
import Image from '../../../../../components/image'

const FacebookURL = 'https://www.facebook.com/bonvoyago'
const InstagramURL = 'https://www.instagram.com/bonvoyago'
const TwitterURL = 'https://twitter.com/bonvoyago'

const SocialContent = () => (
  <Row className="footer-text-social">
    <Image
      alt="Facebook"
      className="footer-social"
      image="facebook"
      path={FacebookURL}
      style={{
        marginTop: -2
      }}
      size={32}
    />
    <Image
      alt="Instagram"
      className="footer-social"
      image="instagram"
      path={InstagramURL}
    />
    <Image
      alt="Twitter"
      className="footer-social"
      image="twitter"
      path={TwitterURL}
    />
  </Row>
)

export default SocialContent

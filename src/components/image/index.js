import React from 'react'
import { Link } from 'react-router-dom'

import ErrorFace from './images/no-data.png'
import FacebookLogo from './images/facebook.svg'
import InstagramLogo from './images/instagram.png'
import LinkedInLogo from './images/linkedin.png'
import TwitterLogo from './images/twitter.png'
import VoyagoLogo from './images/voyago-logo.png'
import VoyagoText from './images/voyago-text.png'

const types = {
  errorFace: ErrorFace,
  facebook: FacebookLogo,
  instagram: InstagramLogo,
  linkedIn: LinkedInLogo,
  twitter: TwitterLogo,
  logo: VoyagoLogo,
  voyago: VoyagoText,
}

export const LinkedImage = ({ alt, className, image, linkTo, path, size, style }) => (
  <Link to={linkTo} >
    <img
      alt={alt}
      className={className}
      src={types[image]}
      style={{
        cursor: path ? 'cursor' : null,
        width: size || null,
        ...style
      }}
    />
  </Link>
)

const Image = ({ alt, className, image, linkTo, path, size, style }) => (
  <a href={path} target="_blank" >
    <img
      alt={alt}
      className={className}
      src={types[image]}
      style={{
        cursor: path ? 'cursor' : null,
        width: size || null,
        ...style
      }}
    />
  </a>
)

export default Image
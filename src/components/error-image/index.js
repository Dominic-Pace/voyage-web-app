import React from 'react'
import { H2, H3 } from '../text'
import Image from '../image'

import './styles.css'
const ErrorImage = ({ message, titleMessage }) => (
  <React.Fragment>
    <div className="error-img-container">
      <Image
        alt="Error Message"
        image="errorFace"
        size={200}
      />
    </div>
    <H2 bold center>
      { titleMessage }
    </H2>
    <H3 center>
      { message }
    </H3>
  </React.Fragment>
)

export default ErrorImage
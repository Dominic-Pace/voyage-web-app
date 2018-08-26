import React from 'react'

import { H1 } from '../../../components/text'
import { getDifferenceInDays } from '../../../utils/date'


const PackageBanner = ({ currentPackage }) => {
  const differenceInDays = getDifferenceInDays(currentPackage.startDate, currentPackage.endDate)

  return (
    <div
      className="package-banner"
      style={{ backgroundImage: `url(${currentPackage.imageUrl})` }}
    >
      <H1
        bold
        center
        color="#FFF"
        rowClassName="booking-review-header-image-row"
        style={{
          fontSize: '3rem',
          textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          {`${differenceInDays + 1 } Days ${differenceInDays} Nights in`}
        </div>
        <div style={{ textAlign: 'center' }}>
          {currentPackage.locations.location1}
        </div>
      </H1>
    </div>
  )
}

export default PackageBanner

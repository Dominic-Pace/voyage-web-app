import React from 'react'

import './styles.css'

const Line = ({ style, width }) => {
  return (
    <div
      className="line-break"
      style={{
        ...{
          width: width || '80vw',
        }, ...style
      }}
    />
  )
}

export default Line

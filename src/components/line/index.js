import React from 'react'

import './styles.css'

const Line = ({ width }) => {
  return (
    <div
      className="line-break"
      style={{ width: width || '80vw' }}
    />
  )
}

export default Line

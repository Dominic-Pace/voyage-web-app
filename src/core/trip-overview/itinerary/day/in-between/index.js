import React from 'react'

const InBetweenCards = ({ children }) => (
  <div className="in-between">
    <div className="in-between-dot">&bull;</div>
    <div className="in-between-dot">&bull;</div>
    <div className="in-between-dot">&bull;</div>
    <div className="in-between-time">{children}</div>
    <div className="in-between-dot">&bull;</div>
    <div className="in-between-dot">&bull;</div>
    <div className="in-between-dot">&bull;</div>
  </div>
)

export default InBetweenCards

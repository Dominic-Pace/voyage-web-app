import React from 'react'

const Tag = ({ onClick, size, style, title }) => (
  <div
    className="fun-card-tags-card"
    key={title}
    onClick={onClick}
    style={{
      ...{
        padding: size ? size : null
      },
      ...style
    }}
  >
    {title}
  </div>
)

export default Tag
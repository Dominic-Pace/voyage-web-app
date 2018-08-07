import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import Tag from '../../../../components/tag'

const ActivityFilters = ({ handleClick, yelpTags }) => (
  <HorizontalScroll
    className="explore-banner-categories"
    reverseScroll
  >
    {
      yelpTags ?
        yelpTags.map(tag => (
          <Tag
            key={tag.displayName}
            onClick={() => handleClick(tag.filterName)}
            style={{
              cursor: 'pointer',
              height: 40,
              marginRight: 40,
              padding: 20,
            }}
            title={tag.displayName}
          />
        ))
        :
        null
    }
  </HorizontalScroll>
)

export default ActivityFilters

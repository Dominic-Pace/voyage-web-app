import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import Tag from '../../../../components/tag'

const renderFilters = (handleClick, yelpTags) => (
  <React.Fragment>
    {
      yelpTags ?
        yelpTags.map(tag => (
          <Tag
            classPrefix="filter"
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
  </React.Fragment>
)

const ActivityFilters = ({ handleClick, isMobileView, yelpTags }) => (
  <React.Fragment>
    {
      isMobileView
        ?
        <div className="explore-mobile-banner-categories">
          { renderFilters(handleClick, yelpTags) }
        </div>
        :
        <HorizontalScroll
          className="explore-banner-categories"
          reverseScroll
        >
          { renderFilters(handleClick, yelpTags) }
        </HorizontalScroll>
    }
  </React.Fragment>
)

export default ActivityFilters

import React from 'react'

import Filters from './filters'
import { FunCard } from '../../../components/card'
import { Grid } from 'react-bootstrap'

import '../styles.css'

const ActivitiesView = ({
  handleActivityClick,
  handleFilterClick,
  isMobileView,
  selectedActivities,
  thingsToDo,
  yelpTags,
}) => (
  <Grid className="booking-view-container">
    <Filters
      handleClick={handleFilterClick}
      isMobileView={isMobileView}
      yelpTags={yelpTags}
    />
    {
      thingsToDo
        ?
        thingsToDo.map(addOn => (
          <FunCard
            addOn={addOn}
            handleClick={handleActivityClick}
            isMobileView={isMobileView}
            key={addOn.name}
            selected={selectedActivities.find(activity => activity.id === addOn.id)}
          />
        ))
        :
        null
    }
  </Grid>
)

export default ActivitiesView

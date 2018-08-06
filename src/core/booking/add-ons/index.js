import React from 'react'

import { FunCard } from '../../../components/card'
import { Grid } from 'react-bootstrap'

import '../styles.css'

const handleClick = name => {
  console.log('clicked', name)
}

const AddOnsView = ({ thingsToDo }) => (
  <Grid className="booking-view-container">
    {
      thingsToDo
        ?
        thingsToDo.map(addOn => (
          <FunCard
            addOn={addOn}
            handleClick={() => handleClick}
          />
        ))
        :
        null
    }
  </Grid>
)

export default AddOnsView

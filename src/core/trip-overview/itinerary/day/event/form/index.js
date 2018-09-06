import React from 'react'
import {
  BASE_FORM_REDUCER,
  USER_PROFILE_FORM
} from '../../../../../../components/form/constants'
import { Form } from 'react-redux-form'


import {
  TextAreaField,
  TextInputField
} from '../../../../../../components/form'
import { getTypeText } from '../../../icon'

const ItineraryEventForm = ({ event }) => (
  <Form
    className="itinerary-form"
    model={`${BASE_FORM_REDUCER}${USER_PROFILE_FORM}`}
  >
    {
      event &&
      <div className="itinerary-form-label">
        Event Name
      </div>
    }
    <TextInputField
      defaultValue={event.name}
      model="name"
      placeholder="Name"
    />
    {
      event &&
      <div className="itinerary-form-label">
        Start Time
      </div>
    }
    <TextInputField
      defaultValue={event.startTime}
      model="startTime"
      placeholder="Start Time"
    />
    {
      event &&
      <div className="itinerary-form-label">
        Event Type
      </div>
    }
    <TextInputField
      defaultValue={getTypeText(event.type)}
      model="type"
      placeholder="Event Type"
    />
    {
      event &&
      <div className="itinerary-form-label">
        Event Description
      </div>
    }
    <TextAreaField
      defaultValue={event.description}
      model="description"
      placeholder="Event Description"
    />
    {
      event &&
      <div className="itinerary-form-label">
        Price Per Person/How much to set aside?
      </div>
    }
    <TextInputField
      model="pricePerPerson.price"
      placeholder="Price Per Person"
      type="number"
    />
    {
      event &&
      <div className="itinerary-form-label">
        What is the cost for?
      </div>
    }
    <TextInputField
      model="pricePerPerson.for"
      placeholder="What for?"
    />
  </Form>
)

export default ItineraryEventForm

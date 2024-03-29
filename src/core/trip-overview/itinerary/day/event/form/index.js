import React from 'react'
import {
  BASE_FORM_REDUCER,
  ITINERARY_EVENT_FORM,
} from '../../../../../../components/form/constants'
import { Form } from 'react-redux-form'
import { get } from 'lodash'

import {
  TextAreaField,
  TextInputField
} from '../../../../../../components/form'
import { getTypeText } from '../../../icon'

const ItineraryEventForm = ({ event }) => {
  const eventType = get(event, 'type', '')

  return (
    <Form
      className="itinerary-form"
      model={`${BASE_FORM_REDUCER}${ITINERARY_EVENT_FORM}`}
    >
      {
        event &&
        <div className="itinerary-form-label">
          Event Name
        </div>
      }
      <TextInputField
        defaultValue={get(event, 'name', '')}
        model="name"
        placeholder="Name"
        style={{
          width: '80vw',
          justifyContent: 'center',
        }}
      />
      {
        event &&
        <div className="itinerary-form-label">
          Start Time
        </div>
      }
      <TextInputField
        defaultValue={get(event, 'startTime', '')}
        model="startTime"
        placeholder="Start Time"
        style={{
          width: '80vw',
          justifyContent: 'center',
        }}
      />
      {
        event &&
        <div className="itinerary-form-label">
          Event Type
        </div>
      }
      <TextInputField
        defaultValue={eventType ? getTypeText(eventType) : eventType}
        model="type"
        placeholder="Event Type"
        style={{
          width: '80vw',
          justifyContent: 'center',
        }}
      />
      {
        event &&
        <div className="itinerary-form-label">
          Event Description
        </div>
      }
      <TextAreaField
        defaultValue={get(event, 'description', '')}
        model="description"
        placeholder="Event Description"
        style={{
          width: '80vw',
          justifyContent: 'center',
        }}
      />
      {
        event &&
        <div className="itinerary-form-label">
          How much $$ to set aside?
        </div>
      }
      <TextInputField
        defaultValue={get(event, 'pricePerPerson.price', '')}
        model="pricePerPerson.price"
        placeholder="Price Per Person"
        style={{
          width: '80vw',
          justifyContent: 'center',
        }}
        type="number"
      />
      {
        event &&
        <div className="itinerary-form-label">
          What is the cost for?
        </div>
      }
      <TextInputField
        defaultValue={get(event, 'pricePerPerson.for', '')}
        model="pricePerPerson.for"
        placeholder="What for?"
        style={{
          width: '80vw',
          justifyContent: 'center',
        }}
      />
    </Form>
  )
}

export default ItineraryEventForm

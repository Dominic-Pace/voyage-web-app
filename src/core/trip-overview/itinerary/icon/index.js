import React from 'react'

import DessertIcon from './vectors/dessert.svg'
import EatIcon from './vectors/eat.svg'
import PlaneIcon from './vectors/plane.svg'

const typeIcons = {
  eatDessert: DessertIcon,
  eatLunch: EatIcon,
  flightArrival: PlaneIcon,
  flightDepart: PlaneIcon,
}

const typeText = {
  eatDessert: 'Dessert Time Baby! 😋',
  eatLunch: 'Time for Lunch!',
  flightArrival: 'Flight Arrival',
  flightDepart: 'Flight Departure',
}

export const getTypeText = (eventType) => typeText[eventType]

const ItineraryIcon = ({ className, handleBlur, handleFocus, pointer, size, style, type }) => (
  <img
    alt={type}
    className={className}
    height={size}
    onBlur={handleBlur}
    onMouseEnter={handleFocus}
    src={typeIcons[type]}
    style={style}
    width={size}
  />
)

export default ItineraryIcon
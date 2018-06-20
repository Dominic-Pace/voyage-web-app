import React from 'react'

import NeedVacation from './vectors/need-a-vacation.svg'
import SendMessage from './vectors/send-message.svg'
import TravelBaggage from './vectors/travel-baggage.svg'
import WorldAwaits from './vectors/world-awaits.svg'

const types = {
  needAVacation: NeedVacation,
  send: SendMessage,
  travelBaggage: TravelBaggage,
  worldAwaits: WorldAwaits,
}

const Icon = ({ onClick, pointer, size, style, type }) => (
  <img
    alt='type'
    className={(pointer && type === 'menu' ? 'mobile-menu' : (pointer ? 'icon-link' : null))}
    onClick={onClick}
    src={types[type]}
    style={style}
    width={size}
  />
)

export default Icon
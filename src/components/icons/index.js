import React from 'react'

import CheckMark from './vectors/checkmark.svg'
import Close from './vectors/close.svg'
import HeartFill from './vectors/heart-fill.svg'
import HeartLine from './vectors/heart-line.svg'
import NeedVacation from './vectors/need-a-vacation.svg'
import SendMessage from './vectors/send-message.svg'
import TravelBaggage from './vectors/travel-baggage.svg'
import User from './vectors/user.svg'
import UserSelected from './vectors/user-selected.svg'
import WorldAwaits from './vectors/world-awaits.svg'

const types = {
  checkmark: CheckMark,
  close: Close,
  heartFill: HeartFill,
  heartLine: HeartLine,
  needAVacation: NeedVacation,
  send: SendMessage,
  travelBaggage: TravelBaggage,
  user: User,
  userSelected: UserSelected,
  worldAwaits: WorldAwaits,
}

const Icon = ({ handleBlur, handleFocus, pointer, size, style, type }) => (
  <img
    alt={type}
    className={(pointer && type === 'menu' ? 'mobile-menu' : (pointer ? 'icon-link' : null))}
    onBlur={handleBlur}
    onFocus={handleFocus}
    src={types[type]}
    style={style}
    width={size}
  />
)

export default Icon
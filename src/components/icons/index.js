import React from 'react'

import CarFill from './vectors/car-fill.svg'
import CheckMark from './vectors/checkmark.svg'
import Close from './vectors/close.svg'
import CloseDark from './vectors/close-dark.svg'
import Food from './vectors/food.svg'
import HeartFill from './vectors/heart-fill.svg'
import HeartLine from './vectors/heart-line.svg'
import NeedVacation from './vectors/need-a-vacation.svg'
import SendMessage from './vectors/send-message.svg'
import Shopping from './vectors/shopping.svg'
import TaxiFill from './vectors/taxi-fill.svg'
import TrainFill from './vectors/train-fill.svg'
import TravelBaggage from './vectors/travel-baggage.svg'
import UberFill from './vectors/uber-fill.svg'
import User from './vectors/user.svg'
import UserSelected from './vectors/user-selected.svg'
import WorldAwaits from './vectors/world-awaits.svg'

const types = {
  carFill: CarFill,
  checkmark: CheckMark,
  close: Close,
  closeDark: CloseDark,
  food: Food,
  heartFill: HeartFill,
  heartLine: HeartLine,
  needAVacation: NeedVacation,
  send: SendMessage,
  shopping: Shopping,
  taxiFill: TaxiFill,
  trainFill: TrainFill,
  travelBaggage: TravelBaggage,
  uberFill: UberFill,
  user: User,
  userSelected: UserSelected,
  worldAwaits: WorldAwaits,
}

const Icon = ({ handleBlur, handleFocus, pointer, size, style, type }) => (
  <img
    alt={type}
    className={(pointer && type === 'menu' ? 'mobile-menu' : (pointer ? 'icon-link' : null))}
    height={size}
    onBlur={handleBlur}
    onMouseEnter={handleFocus}
    src={types[type]}
    style={style}
    width={size}
  />
)

export default Icon
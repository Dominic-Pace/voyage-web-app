import moment from 'moment'

const diffInDays = timeDiff => Math.ceil(timeDiff / (1000 * 3600 * 24))

export const calculatePrice = (validDate, price) => {
  const diffInDays = getDateDiffFromToday(validDate)

  if (diffInDays <= 3) {
    return price
  } else if ((diffInDays > 3) && (diffInDays <= 5)){
    return price * (1.03 + (.004 * diffInDays))
  } else if (diffInDays > 5 && diffInDays <= 10){
    return price * (1.03 + (.005 * diffInDays))
  } else {
    return price * (1.03 + (.006 * diffInDays))
  }
}

export const calculatePackagePrice = travelPackage => {
  const diffInDays = getDateDiffFromToday(travelPackage.validStartingAt)

  const beforeCalcPrice = (travelPackage.flightPrice +
      travelPackage.accommodationPrice +
      travelPackage.otherPrice
  )

  if (diffInDays <= 3) {
    return beforeCalcPrice
  } else if ((diffInDays > 3) && (diffInDays <= 5)){
    return beforeCalcPrice * (1.03 + (.004 * diffInDays))
  } else if (diffInDays > 5 && diffInDays <= 10){
    return beforeCalcPrice * (1.03 + (.005 * diffInDays))
  } else {
    return beforeCalcPrice * (1.03 + (.006 * diffInDays))
  }
}

export const getDifferenceInDays = (startDate, endDate) => {
  let timeDiff = Math.abs(new Date(startDate).getTime() - new Date(endDate).getTime())
  return Math.ceil(timeDiff / (1000 * 3600 * 24))
}

export const getDateDiffFromToday = laterDate => {
  const timeDiff = new Date() - new Date(laterDate)
  return diffInDays(timeDiff)
}

export const getDateDiffFromEnding = endingDate => {
  const timeDiff = new Date(endingDate) - new Date()
  return diffInDays(timeDiff)
}

export const getMinAgeDate = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //January is 0!
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd='0'+dd
  }
  if (mm < 10) {
    mm='0'+mm
  }

  return `${yyyy - 18}-${mm}-${dd}`
}

export const getDayOfWeek = date => {
  const dayNumber = moment(date).day()
  switch(dayNumber) {
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    case 7:
      return 'Sunday'
    default:
      return ''
  }
}
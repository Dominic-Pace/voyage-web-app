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

const diffInDays = timeDiff => Math.ceil(timeDiff / (1000 * 3600 * 24))

export const calculatePrice = travelPackage => {
  const diffInDays = getDateDiffFromToday(travelPackage.__meta__.createdDate)

  const beforeCalcPrice = (travelPackage.flightPrice +
      travelPackage.accommodationPrice +
      travelPackage.otherPrice
  )

  if (diffInDays <= 3) {
    return beforeCalcPrice
  } else if ((diffInDays > 3) && (diffInDays <= 5)){
    return beforeCalcPrice * (1.03 + (.004 * diffInDays))
  } else if (diffInDays > 5 && diffInDays <= 10){
    return beforeCalcPrice * (1.03 + (.006 * diffInDays))
  } else {
    return beforeCalcPrice * (1.03 + (.009 * diffInDays))
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

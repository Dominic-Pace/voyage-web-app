import database  from './init'

export const contactUsRef = database.ref('/contactUsRequests')
export const customVacationRef = database.ref('/customVacationRequests')
export const joinEmailListRef = database.ref('/emailList')
export const packagesRef = database.ref('/flamelink/environments/production/content/packages/en-US')
export const travelCategoriesRef = database.ref('/flamelink/environments/production/content/travelCategeories/en-US')
export const locationsRef = database.ref('/flamelink/environments/production/content/locations/en-US')
export const yelpTagsRef = database.ref('/flamelink/environments/production/content/yelpTags/en-US')
export const singleAccommodationsRef = id => database.ref(`/flamelink/environments/production/content/accommodations/en-US/${id}`)
export const singlePackageRef = id => database.ref(`/flamelink/environments/production/content/packages/en-US/${id}`)

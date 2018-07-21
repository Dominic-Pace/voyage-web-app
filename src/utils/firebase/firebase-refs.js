import database  from './init'

export const customVacationRef = database.ref('/customVacationRequests')
export const travelCategoriesRef = database.ref('/flamelink/environments/production/content/travelCategeories/en-US')
export const packagesRef = database.ref('/flamelink/environments/production/content/packages/en-US')
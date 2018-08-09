import * as firebase from 'firebase'
import config  from './config'

firebase.initializeApp(config)

const database = firebase.database()
export const firebaseAuth = firebase.auth()
export default database
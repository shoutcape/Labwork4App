// firebaseConfig.tsx

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyDb2aXIyr37goo8usdN9B8_kz55GdokxZY",
    authDomain: "labwork-4-92b09.firebaseapp.com",
    databaseURL: "https://labwork-4-92b09.firebaseio.com",
    projectId: "labwork-4-92b09",
    storageBucket: "labwork-4-92b09.appspot.com",
    messagingSenderId: "220986087366",
    appId: "1:220986087366:web:02f675f5f41416f85404c7"
};

firebase.initializeApp(config)

export default firebase;
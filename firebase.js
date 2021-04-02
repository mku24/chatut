import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD4Z9AB-wM_vvV0VXzXw3SD8Xgi5SZ06UA",
    authDomain: "papawhat2-ca1e0.firebaseapp.com",
    projectId: "papawhat2-ca1e0",
    storageBucket: "papawhat2-ca1e0.appspot.com",
    messagingSenderId: "617364628511",
    appId: "1:617364628511:web:2988e424e4898d79ece12a"
  };

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider} 
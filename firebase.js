//////// PROJECT NAME IF FIREBASE  /////////////
////////////// whatsapp-clone ////////////////

import firebase from 'firebase';

const firebaseConfig = {
apiKey: "AIzaSyAA6LA8A9LrfaIDoftETjKFkSDoSfgjYGw",
authDomain: "whatsapp-clone-5cb3c.firebaseapp.com",
projectId: "whatsapp-clone-5cb3c",
storageBucket: "whatsapp-clone-5cb3c.appspot.com",
messagingSenderId: "790502747379",
appId: "1:790502747379:web:aa69d6bb33d4a899721b86"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
// const dd = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}
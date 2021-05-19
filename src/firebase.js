import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDX1kIZS0c3-8zOPUih3TZeP6hy6fvYyYg",
    authDomain: "imessage-clone-d937d.firebaseapp.com",
    projectId: "imessage-clone-d937d",
    storageBucket: "imessage-clone-d937d.appspot.com",
    messagingSenderId: "673736147403",
    appId: "1:673736147403:web:19489f707d410b7f36364e",
    measurementId: "G-T8NNH9HE2Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBbw86nGU7sM4yyW6ovaB99pzSX_gpMSCc",
  authDomain: "slackclone-8217e.firebaseapp.com",
  databaseURL: "https://slackclone-8217e.firebaseio.com",
  projectId: "slackclone-8217e",
  storageBucket: "slackclone-8217e.appspot.com",
  messagingSenderId: "394166397070",
  appId: "1:394166397070:web:c9df21057dbbba5d5f81df",
  measurementId: "G-QPN7ZM9NYX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

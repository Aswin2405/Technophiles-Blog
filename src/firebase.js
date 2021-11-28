import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5pJShKGVJZSYU7AHJEvUvMupnj3m8tHU",
  authDomain: "technophiles-blog.firebaseapp.com",
  projectId: "technophiles-blog",
  storageBucket: "technophiles-blog.appspot.com",
  messagingSenderId: "237589541966",
  appId: "1:237589541966:web:6f64c77bb989bb312d3f1f",
  measurementId: "G-PM8BQ8WS0Y"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebaseApp.auth()
  const db= firebaseApp.firestore()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage();
  export {auth,provider,storage}
  export default  db
import firebase from 'firebase/app'
import Rebase from 're-base'

const config = {
    apiKey: "AIzaSyBhJtuF7kip6rX5cpYUQMmh9bKeVwuthpg",
    authDomain: "tik-tok-11220.firebaseapp.com",
    databaseURL: "https://tik-tok-11220.firebaseio.com",
    projectId: "tik-tok-11220",
    storageBucket: "",
    messagingSenderId: "577967568938"
  };
 
const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export { base }
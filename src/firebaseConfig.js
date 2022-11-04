// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAMQLMAywxpYSVnBmPCIOqnXJqtRVczfA8',
  authDomain: 'vuevite-dd9c5.firebaseapp.com',
  databaseURL: 'https://vuevite-dd9c5-default-rtdb.firebaseio.com',
  projectId: 'vuevite-dd9c5',
  storageBucket: 'vuevite-dd9c5.appspot.com',
  messagingSenderId: '102391215561',
  appId: '1:102391215561:web:5ab47518496cb3017e6418',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)

//initialize firebase auth
const auth = getAuth()

const firestore = getFirestore()

export { app, auth, firestore }

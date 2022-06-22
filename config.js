import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
        apiKey: "AIzaSyD2zTnLviAM644PDs6DszO1hPMUK2G4YQI",
        authDomain: "presente-ausente.firebaseapp.com",
        databaseURL: "https://presente-ausente-default-rtdb.firebaseio.com",
        projectId: "presente-ausente",
        storageBucket: "presente-ausente.appspot.com",
        messagingSenderId: "954571206681",
        appId: "1:954571206681:web:904f863b4f304166b23a88",
        measurementId: "G-0Y8VFBLH17"
      };
      
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
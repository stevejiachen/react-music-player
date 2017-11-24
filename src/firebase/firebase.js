import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCAcIn6aV1CnoLUbHjw2gYYLemjs_iUk7M",
    authDomain: "qsic-test1124.firebaseapp.com",
    databaseURL: "https://qsic-test.firebaseio.com",
    projectId: "qsic-test1124",
    storageBucket: "qsic-test1124.appspot.com",
    messagingSenderId: "553206464304"
  };
  firebase.initializeApp(config);

  // https://qsic-test.firebaseio.com/1/now_playing

const database = firebase.database();

const playing_1 = firebase.database().ref("1/now_playing");


export { firebase, database, playing_1 as default}

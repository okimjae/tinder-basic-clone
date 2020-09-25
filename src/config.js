import firebase from 'react-native-firebase';
// let firebaseConfig = {
//     apiKey: "AIzaSyAG0FvgbmiJk20CjHa_-lIgHV6wm4xFv2o",
//     authDomain: "chihuahua-pequena.firebaseapp.com",
//     databaseURL: "https://chihuahua-pequena.firebaseio.com",
//     projectId: "chihuahua-pequena",
//     storageBucket: "chihuahua-pequena.appspot.com",
//     messagingSenderId: "53657269921",
//     appID: "1:53657269921:android:0cec39ad5116c66b6462e0",
// };
// let app = firebase.initializeApp(firebaseConfig);
// export const db = firebase.database();

// Set the configuration for your app
// TODO: Replace with your project's config object
let config = {
    apiKey: "AIzaSyCJ9AoY0OzbFixK3CDScUFP4QJR6GrjrF8",
    authDomain: "chihuahua-pequena.firebaseapp.com",
    databaseURL: "hhttps://chihuahua-sacurae.firebaseio.com",
    projectId: "chihuahua-sacurae",
    storageBucket: "chihuahua-sacurae.appspot.com",
    messagingSenderId: "14979199414",
    appId: "1:14979199414:android:635db0a578540787211117",
};

firebase.initializeApp(config);

// Get a reference to the database service
export const db = firebase.database();
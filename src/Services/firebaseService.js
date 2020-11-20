import firebase from "firebase";

const firebaseConfig = {
    

    apiKey: "AIzaSyAv6JLjqil9R3fe6NrOICPmb5Dv2HDSb0M",
    authDomain: "notificationapp-9463f.firebaseapp.com",
    databaseURL: "https://notificationapp-9463f.firebaseio.com",
    projectId: "notificationapp-9463f",
    storageBucket: "notificationapp-9463f.appspot.com",
    messagingSenderId: "506718388704",
    appId: "1:506718388704:web:a1f0b530c57ac13fa3ab85"};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
export function initNotification() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
         
messaging.getToken().then((currentToken) => {

console.log(currentToken)}
    ).catch((err) => {
      console.log('Unable to delete token. ', err);
    });
    // [END delete_token]
  } else {
          console.log('Unable to get permission to notify.');
        }
      });
      // [END request_permission]
}


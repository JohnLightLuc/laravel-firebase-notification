// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    apikey: "AIzaSyDU4yErYGZ5S0gR95StmaXOnBx8Uw0yqEs",
    authDomain: "cheznous-fa08f.firebaseapp.com",
    projectId: "cheznous-fa08f",
    storageBucket: "cheznous-fa08f.appspot.com",
    messagingSenderId: "513476528003",
    appId: "1:513476528003:web:82b80f1982f38157f098b6",
    measurementId: "measurement-id"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log("Message received.", payload);
    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };
    return self.registration.showNotification(
        title,
        options,
    );
});
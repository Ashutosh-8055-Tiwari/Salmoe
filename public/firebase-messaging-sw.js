importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


firebase.initializeApp({
    // EDITME:
    apiKey: 'AIzaSyC1QYr5YZKFgG6LasUdREB8WJN2MWlbEB4',
    authDomain: 'kashmirtrout-62b7b.firebaseapp.com',
    projectId: 'kashmirtrout-62b7b',
    storageBucket: '295711060922',
    messagingSenderId: 'kashmirtrout-62b7b.appspot.com',
    appId: '1:295711060922:web:4fb70d21023717a18ca383',
    measurementId: 'G-XQKZBRF7FE',
});

const messaging = firebase.messaging();

try {
    messaging.setBackgroundMessageHandler(function (payload) {
        let data = payload?.notification;
        const notificationTitle = data?.title;
        const notificationOptions = {
            body: data?.body,
            icon: './logo.png' || 0,
            image: data?.image
        };

        return self.registration.showNotification(notificationTitle,
            notificationOptions);
    });

} catch (error) {
    console.log("This is an error ->", error);
}

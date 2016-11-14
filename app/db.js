// Firebase obtained from the global context

const config = {
  apiKey: 'YOUR_API_KEY_HERE',
  authDomain: 'YOUR_APP_NAME.firebaseapp.com',
  databaseURL: 'https://YOUR_APP_NAME.firebaseio.com',
  storageBucket: '',
  messagingSenderId: 'YOUR_MESSAGING_ID'
};
window.firebase.initializeApp(config);

export default window.firebase.database();


import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyD8Dk_h2CZWJ4eEtUVdckDZtIiCCKF9DM4',
	authDomain: 'react-chat-app-79d1a.firebaseapp.com',
	databaseURL: 'https://react-chat-app-79d1a.firebaseio.com',
	projectId: 'react-chat-app-79d1a',
	storageBucket: 'react-chat-app-79d1a.appspot.com',
	messagingSenderId: '1037486233556',
	appId: '1:1037486233556:web:f87a2f2ba0ca873553a841',
	measurementId: 'G-VWBMNDXSRV',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

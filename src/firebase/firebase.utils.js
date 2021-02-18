import firebase from 'firebase/app';
import 'firebae/firestore';
import 'firebase/fireauth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDkuG9WPGHFUpNaGM14MyYN9gH91UIyauA',
	authDomain: 'arabuco-kai.firebaseapp.com',
	projectId: 'arabuco-kai',
	storageBucket: 'arabuco-kai.appspot.com',
	messagingSenderId: '103363607579',
	appId: '1:103363607579:web:7603a7ea5b270e0d7b0cbe',
	measurementId: 'G-0WWPS6E3S6',
};

firebase.initializeApp(firebaseConfig);

const { auth, firestore } = firebase;
export const authMiddleware = { auth, firestore };

// export const auth = firebase.auth();
// export const firesotre = firebase.firestore();

const provider = new auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = auth.signInWithPopup(provider);

export default firebase;

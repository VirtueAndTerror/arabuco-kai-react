import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/* Conects and Intialize Firebase */

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

/* Setup Sign in with Google */
export const auth = firebase.auth();
// export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
	firebase
		.auth()
		.signInWithPopup(provider)
		// Optional code for handeling credentials and errors.
		.then(result => {
			let credential = result.credential;
			const token = credential.accessToken;
			const user = result.user;
		})
		.catch(error => {
			const errorCode = error.code;
			const email = error.email;
			let credential = error.credential;
		});
};
export default firebase;

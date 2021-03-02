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

/*Modeling the data to fetch  */
export const createUserProfileDocument = async (userAuth, additionalData) => {
	console.log('userAuth.uid', userAuth.uid);
	if (!userAuth) return;
	// User Ref Object gives me access to CRUD methods & point to the location we are quering for.
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	console.log('userRef', userRef);

	// This checks if user exists.
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.error('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(firebaseConfig);

// This func allow us store an entire collections on my Firebase.
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

// This gets the snapshot obj.
export const convertCollectionsSnapshotToMap = collections => {
	const transformedColleciton = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});

	return transformedColleciton.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

/* Setup Sign in with Google */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

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
			new Error(`Error number ${errorCode} has occurred.`);
		});
};
export default firebase;

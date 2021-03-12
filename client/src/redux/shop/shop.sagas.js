import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
} from './shop.actions';

import ShopActionTypes from './shop.types';

// Async code we want to execute
export function* fetchCollectionsAsync() {
	try {
		const collectionRef = yield firestore.collection('collections');
		console.log('SHOP SAGA HAS BEEN EXECUTED');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			snapshot
		);
		// 'put() is the saga effect for creating actions || dispatch()
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		// dispatch()
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* onfetchCollectionsStart() {
	// takeEvery(), takeLast() are a listening effects
	yield takeLatest(
		// Listen to this
		ShopActionTypes.FETCH_COLLECTIONS_START,
		// Execute this
		fetchCollectionsAsync
	);
}

export function* shopSagas() {
	yield all([call(onfetchCollectionsStart)]);
}

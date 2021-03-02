import { Shop } from 'react-bootstrap-icons';
import ShopActionTypes from './shop.types';

export const updateCollections = collectionsMap => ({
	type: ShopActionTypes.UPDATE_COLLECTIONS,
	payload: collectionsMap,
});

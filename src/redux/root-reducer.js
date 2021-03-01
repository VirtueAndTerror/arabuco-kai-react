import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// This gives us the localStorage object form window.
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
	key: 'root',
	storage,
	// Array of reducers we want to persist.
	whitelist: ['cart'],
};

const rootReducer = combineReducers({
	// Individual pice of state we want to modigy
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);

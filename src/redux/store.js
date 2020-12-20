import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';

const middleware = [thunk];

//redux-persist
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cartState', 'favoritesState', 'userState'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);
export { store, persistor };

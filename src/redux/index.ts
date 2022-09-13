import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistCombineReducers} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
/**
 * ? Local Imports
 */
import RootSaga from './sagas';
import rootReducers from './reducers';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loadingReducer'],
  debug: true, //to get useful logging
};

// Setup Middlewares
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
}

const persistedRootReducer = persistCombineReducers(config, rootReducers);

// Create Store
const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middleware),
});

sagaMiddleware.run(RootSaga);

// Setup Store persistence
const persistor = persistStore(store, null);

export {store, persistor};

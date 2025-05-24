import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage use hoga
import { thunk } from 'redux-thunk';

// redux-persist config
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// configure store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // persist ke sath yeh zaroori hota hai
    }).concat(thunk),
});

// export store and persistor
export const persistor = persistStore(store);
export default store;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
  Storage,
} from 'redux-persist';

import { storageMmkv } from '@src/context';

import { userData, userDataName } from './reducers';

const rootReducer = combineReducers({
  userData,
});

export type RootState = ReturnType<typeof rootReducer>;

export const reduxStorage: Storage = {
  getItem: key => {
    const value = storageMmkv.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storageMmkv.delete(key);
    return Promise.resolve();
  },
  setItem: (key, value) => {
    storageMmkv.set(key, value);
    return Promise.resolve(true);
  },
};

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: reduxStorage,
  whitelist: [userDataName],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk: {
        extraArgument: {},
      },
    }),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;

export * from './reducers';

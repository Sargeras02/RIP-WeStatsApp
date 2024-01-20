import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to local storage
import { authReducer } from "./auth/slice";
import { currentOrderReducer } from './cntOrder/slice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedCrntOrderReducer = persistReducer(persistConfig, currentOrderReducer);

export const store = configureStore({
    reducer: combineReducers({
        auth: persistedAuthReducer,
        currentOrder: persistedCrntOrderReducer,
    }),
});
export const persistor = persistStore(store);
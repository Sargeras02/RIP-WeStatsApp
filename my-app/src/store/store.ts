import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { dataReducers } from "./data/slice";

export const store = configureStore({
    reducer: combineReducers({
        data: dataReducers,
    }),
});
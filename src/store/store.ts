import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { catsApi } from './services/catsApi';
import { favsReducer } from './slices/favsSlice';
import { catsReducer } from './slices/catsSlice';

const rootReducer = combineReducers({
  [catsApi.reducerPath]: catsApi.reducer,
  cats: catsReducer,
  favs: favsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

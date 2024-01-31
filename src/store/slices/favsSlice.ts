import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICat } from '../../interfaces/CatInterfaces';
import { RootState } from '../store';

const initialFavsState: ICat[] = [];

const favsSlice = createSlice({
  name: 'favs',
  initialState: initialFavsState,
  reducers: {
    addToFavs: (state, action: PayloadAction<ICat>) => {
      const catToAdd = action.payload;
      if (!state.some((cat) => cat.id === catToAdd.id)) {
        state.push({ ...catToAdd });
      }
    },

    removeFromFavsById: (state, action: PayloadAction<string>) => {
      return state.filter((cat) => cat.id !== action.payload);
    },
  },
});

export const { addToFavs, removeFromFavsById } = favsSlice.actions;
export const favsReducer = favsSlice.reducer;

export const selectFavs = (state: RootState) => state.favs;

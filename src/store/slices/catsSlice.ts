import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICat } from '../../interfaces/CatInterfaces';

interface CatsState {
  cats: ICat[];
  error: string | null;
}

const initialState: CatsState = {
  cats: [],
  error: null,
};

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    setCats: (state, action: PayloadAction<ICat[]>) => {
      const uniqueCats = action.payload.filter(
        (newCat) => !state.cats.some((existingCat) => existingCat.id === newCat.id)
      );

      state.cats = [...state.cats, ...uniqueCats];
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setCats, setError } = catsSlice.actions;
export const catsReducer = catsSlice.reducer;

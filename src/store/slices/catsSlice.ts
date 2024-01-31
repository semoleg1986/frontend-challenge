import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICat } from '../../interfaces/CatInterfaces';
import { ICatResult } from '../../interfaces/CatInterfaces'; // Импортируем тип результата запроса

interface CatsState {
  cats: ICat[];
  loading: boolean;
  error: string | null;
}

const initialState: CatsState = {
  cats: [],
  loading: false,
  error: null,
};

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    getCatsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getCatsSuccess(state, action: PayloadAction<ICatResult>) {
      state.cats = [...action.payload.results];
      state.loading = false;
    },
    getCatsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    markAsFavorite(state, action: PayloadAction<string>) {
      state.cats = state.cats.map((cat) => {
        if (cat.id === action.payload) {
          return { ...cat, isFavorite: true };
        }
        return cat;
      });
    },
  },
});

export const { getCatsStart, getCatsSuccess, getCatsFailure, markAsFavorite } = catsSlice.actions;

export const catsReducer = catsSlice.reducer;

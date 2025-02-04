import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICat, ICatResult } from '../../interfaces/CatInterfaces';

const API_KEY = import.meta.env.VITE_SOME_KEY;
const BASE_URL = 'https://api.thecatapi.com/v1/images';

export const catsApi = createApi({
  reducerPath: 'catsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCats: builder.query<ICatResult, void>({
      query: () => 'search?limit=10',
      transformResponse: (response: ICat[]) => ({ cats: response }) as ICatResult,
    }),
  }),
});

export const { useGetCatsQuery } = catsApi;

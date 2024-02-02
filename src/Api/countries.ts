import { DataItem } from '../Api/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https:',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '');
      headers.set('X-RapidAPI-Host', ');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<DataItem[], void>({
      query: () => 'countries/US',
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;

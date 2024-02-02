import { DataItem } from '../Api/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '5e257c148bmsh05d695bb9cadb9dp18d03djsnf26062e3b210');
      headers.set('X-RapidAPI-Host', 'wft-geo-db.p.rapidapi.com');
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
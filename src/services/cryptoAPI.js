import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://api.ethplorer.io"; //mainnet url

//Note: using ethplorer mainnet API to get the listof crypto tokens
//since its free-key having some limitation and allowing to get 50 tokens as max as a whole
//we can use rapidAPI - 'coinRanking' API since it giving best result to get the list to cryptoTokens
export const cryptoAPI = createApi({
  reducerPath: "cryptoAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (address) =>
        `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`,
    }),
  }),
});

//Redux toolkit automatically generated the hook for the query endpoint,
//also they provide loading state, fetching state etc
//Export the auto-generated hook for the `getCrypto` query endpoint
export const { useGetCryptoQuery } = cryptoAPI;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//import axios from "axios";

const baseURL = "https://api.opensea.io/api/v1";

const createRequest = (url) => ({
  url,
});

//Note fetching NFT tokens from opensea marketPlace
//trying to get lit of NFT tokens for the given user account
export const cryptoNFTAPI = createApi({
  reducerPath: "cryptoNFTAPI",
  baseQuery: fetchBaseQuery({
    baseURL: baseURL,
  }),
  endpoints: (builder) => ({
    getNft: builder.query({
      query: (address) =>
        createRequest(`https://api.opensea.io/api/v1/assets?owner=${address}`),
    }),
  }),
});

//`https://testnets-api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=20`
//Redux toolkit automatically generated the hook for the query endpoint,
//also they provide loading state, fetching state etc
//Export the auto-generated hook for the `getNft` query endpoint
export const { useGetNftQuery } = cryptoNFTAPI;

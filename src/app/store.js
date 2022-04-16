import { configureStore } from "@reduxjs/toolkit";
import { cryptoAPI } from "../services/cryptoAPI";
import { cryptoNFTAPI } from "../services/cryptoNFTAPI";

//below are the list of reducers to handle the state from API call and manage in store
export default configureStore({
  reducer: {
    [cryptoAPI.reducerPath]: cryptoAPI.reducer,
    [cryptoNFTAPI.reducerPath]: cryptoNFTAPI.reducer,
  },
});

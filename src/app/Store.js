import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/AuthSlice";
import productreducer from '../features/auth/Product'
export const store = configureStore({//it will access the reducer and store data and used in the selector
  reducer: {
    auth: authReducer,
    products:productreducer
  }
});

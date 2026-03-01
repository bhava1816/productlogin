import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/auth/AuthSlice";
import productreducer from '../features/auth/Product'
import createsagamiddleware from 'redux-saga'
import rootSaga from "../features/auth/Rootsaga";
import sagareducer from '../features/auth/Sagareducer'
const createsaga=createsagamiddleware();
console.log(sagareducer)
export const store = configureStore({//it will access the reducer and store data and used in the selector
  reducer: {
    // auth: authReducer,

    auth:sagareducer,
    products:productreducer
  },
  middleware:(getDefaultmiddleware)=>getDefaultmiddleware({thunk:false}).concat(createsaga)
});

createsaga.run(rootSaga);

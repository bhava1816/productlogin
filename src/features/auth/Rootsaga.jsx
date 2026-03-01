import { all } from "redux-saga/effects";
import authSaga from '../auth/Saga'
// import productSaga from "../features/products/productSaga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    // productSaga(),
  ]);
}
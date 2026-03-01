import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "./Authtype";

function* loginWorker(action) {
  try {
  console.log("Saga started", action.payload);
    const response = yield call(
      axios.post,
      "http://localhost:3333/user/login",
      
      action.payload
    );
    console.log(response)
    let token =response.data.data.token;
    console.log(token)
    localStorage.setItem("token",token)
 console.log("Saga started", action.payload);
    yield put({
      type: LOGIN_SUCCESS,
      payload: response.data.data
    });

  } catch (error) {
    yield put({
      type: LOGIN_FAILURE,
      payload: "Login failed"
    });
  }
}


export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginWorker);
}
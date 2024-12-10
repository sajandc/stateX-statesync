import { takeEvery, call, put } from "redux-saga/effects";
import {
  FETCH_USERS_REQUEST,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../action/home.action";
import { fetchApi } from "../constant/callApi";
import { URL } from "../constant/urls";

function* fetchUsersSaga() {
  try {
    const users = yield call(fetchApi, URL.USERS_LIST);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export default function* Home() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga);
}

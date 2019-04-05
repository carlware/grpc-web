import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {fetchPostsSaga} from "./blog.js"

export function* watchPosts() {
  yield takeEvery(actionTypes.FETCH_POSTS, fetchPostsSaga);
}

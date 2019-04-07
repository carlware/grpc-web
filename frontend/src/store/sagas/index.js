import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {fetchPostsSaga, createPostSaga} from "./blog.js"

export function* watchPosts() {
  yield all([
    takeEvery(actionTypes.FETCH_POSTS, fetchPostsSaga),
    takeLatest(actionTypes.CREATE_POST, createPostSaga),
  ])
}

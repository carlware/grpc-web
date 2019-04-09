import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {fetchPostsSaga, createPostSaga, deletePostSaga} from "./blog.js"

export function* watchPosts() {
  yield all([
    takeEvery(actionTypes.FETCH_POSTS, fetchPostsSaga),
    takeEvery(actionTypes.DELETE_POST, deletePostSaga),
    takeLatest(actionTypes.CREATE_POST, createPostSaga),
  ])
}

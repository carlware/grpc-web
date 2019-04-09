import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {fetchPostsSaga,
        readPostSaga,
        updatePostSaga,
        createPostSaga,
        deletePostSaga} from "./blog.js"

export function* watchPosts() {
  yield all([
    takeEvery(actionTypes.FETCH_POSTS, fetchPostsSaga),
    takeEvery(actionTypes.DELETE_POST, deletePostSaga),
    takeEvery(actionTypes.READ_POST, readPostSaga),
    takeEvery(actionTypes.UPDATE_POST, updatePostSaga),
    takeLatest(actionTypes.CREATE_POST, createPostSaga),
  ])
}

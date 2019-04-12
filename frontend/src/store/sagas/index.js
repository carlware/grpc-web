import { takeEvery, all, takeLatest } from "redux-saga/effects";

import { BlogTypes } from '../redux/blog'
import * as Blog from '../sagas/blog'

export function* watchPosts() {
  yield all([
    takeLatest(BlogTypes.FETCH_POSTS, Blog.fetchPostsSaga),
    takeLatest(BlogTypes.CREATE_POST, Blog.createPostSaga),
    takeLatest(BlogTypes.DELETE_POST, Blog.deletePostSaga),
    takeLatest(BlogTypes.UPDATE_POST, Blog.updatePostSaga),
    takeLatest(BlogTypes.READ_POST, Blog.readPostSaga),
  ])
}

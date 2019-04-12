import { all, takeLatest } from "redux-saga/effects";

import { BlogTypes } from '../redux/blog'
import { AuthTypes } from '../redux/auth'
import * as Blog from '../sagas/blog'
import * as Auth from '../sagas/auth'


export function* watchPosts() {
  yield all([
    takeLatest(BlogTypes.FETCH_POSTS, Blog.fetchPostsSaga),
    takeLatest(BlogTypes.CREATE_POST, Blog.createPostSaga),
    takeLatest(BlogTypes.DELETE_POST, Blog.deletePostSaga),
    takeLatest(BlogTypes.UPDATE_POST, Blog.updatePostSaga),
    takeLatest(BlogTypes.READ_POST, Blog.readPostSaga),
  ])
}

export function* watchAuth() {
  yield all([
    takeLatest(AuthTypes.AUTH_CHECK_TIMEOUT, Auth.checkAuthTimeoutSaga),
    takeLatest(AuthTypes.AUTH_LOGOUT_START, Auth.logoutSaga),
    takeLatest(AuthTypes.AUTH_START, Auth.authUserSaga),
    takeLatest(AuthTypes.AUTH_CHECK_STATE, Auth.authCheckStateSaga)
  ]);
}

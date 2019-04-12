import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'


const INITIAL_STATE = Immutable({
  error: null,
  loading: false,
  status: null,
  posts: null,
  post: null,
  postId: null
})

const { Types, Creators } = createActions({
  clear: null,
  fetchPosts: null,
  fetchPostsStart: null,
  fetchPostsSuccess: ['posts'],
  fetchPostsFail: ['error'],
  createPost: ['post'],
  createPostStart: null,
  createPostSuccess: ['post'],
  createPostFail: ['error'],
  deletePost: ['postId'],
  deletePostStart: null,
  deletePostSuccess: ['postId'],
  deletePostFail: ['error'],
  readPost: ['postId'],
  readPostStart: null,
  readPostSuccess: ['post'],
  readPostFail: ['error'],
  updatePost: ['post'],
  updatePostStart: null,
  updatePostSuccess: ['post'],
  updatePostFail: ['error'],
})


export const BlogTypes = Types
export const Actions = Creators

export const clear = (state) => INITIAL_STATE

export const fetchPostsStart = (state) => {
  return state.merge({
    loading: true
  })
}

export const fetchPostsSuccess = ( state, {posts} ) => {
  return state.merge({
    posts: posts,
    loading: false
  })
}

export const fetchPostsFail = ( state, {error} ) => {
  return state.merge({
    loading: false,
    error: error
  })
}

export const createPostStart = (state, action) => {
  return state.merge({
    loading: true
  })
}

export const createPostSuccess = ( state, action ) => {
  return state.merge({
    post: action.post,
    loading: false
  })
}

export const createPostFail = ( state, action ) => {
  return state.merge({
    loading: false,
    error: action.error
  })
}

export const deletePostStart = (state, action) => {
  return state.merge({
    loading: true
  })
}

export const deletePostSuccess = ( state, action ) => {
  return state.merge({
    postId: action.postId,
    loading: false
  })
}

export const deletePostFail = ( state, action ) => {
  return state.merge({
    loading: false,
    error: action.error
  })
}

export const readPostStart = (state, action) => {
  return state.merge({
    loading: true
  })
}

export const readPostSuccess = ( state, action ) => {
  return state.merge({
    loading: false,
    post: action.post
  })
}

export const readPostFail = ( state, action ) => {
  return state.merge({
    loading: false,
    error: action.error
  })
}

export const updatePostStart = (state, action) => {
  return state.merge({
    loading: true
  })
}

export const updatePostSuccess = ( state, action ) => {
  return state.merge({
    loading: false,
  })
}

export const updatePostFail = ( state, action ) => {
  return state.merge({
    loading: false,
    error: action.error
  })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CLEAR]: clear,
  [Types.FETCH_POSTS_START]: fetchPostsStart,
  [Types.FETCH_POSTS_SUCCESS]: fetchPostsSuccess,
  [Types.FETCH_POSTS_FAIL]: fetchPostsFail,
  [Types.CREATE_POST_START]: createPostStart,
  [Types.CREATE_POST_SUCCESS]: createPostSuccess,
  [Types.CREATE_POST_FAIL]: createPostFail,
  [Types.DELETE_POST_START]: deletePostStart,
  [Types.DELETE_POST_SUCCESS]: deletePostSuccess,
  [Types.DELETE_POST_FAIL]: deletePostFail,
  [Types.READ_POST_START]: readPostStart,
  [Types.READ_POST_SUCCESS]: readPostSuccess,
  [Types.READ_POST_FAIL]: readPostFail,
  [Types.UPDATE_POST_START]: updatePostStart,
  [Types.UPDATE_POST_SUCCESS]: updatePostSuccess,
  [Types.UPDATE_POST_FAIL]: updatePostFail,
})

import * as actionTypes from "./actionTypes";


export const fetchPosts = () => {
  return {
    type: actionTypes.FETCH_POSTS
  }
}

export const fetchPostsStart = () => {
  return {
    type: actionTypes.FETCH_POSTS_START
  }
}


export const fetchPostsSuccess = (posts) => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    posts: posts
  }
}


export const fetchPostsFail = (error) => {
  return {
    type: actionTypes.FETCH_POSTS_FAIL,
    error: error
  }
}

export const createPost = (post) => {
  return {
    type: actionTypes.CREATE_POST,
    post: post
  }
}

export const createPostStart = () => {
  return {
    type: actionTypes.CREATE_POST_START,
  }
}


export const createPostSuccess = (post) => {
  return {
    type: actionTypes.CREATE_POST_SUCCESS,
    post: post
  }
}


export const createPostFail = (error) => {
  return {
    type: actionTypes.CREATE_POST_FAIL,
    error: error
  }
}

export const deletePost = (postId) => {
  return {
    type: actionTypes.DELETE_POST,
    postId: postId
  }
}

export const deletePostStart = () => {
  return {
    type: actionTypes.DELETE_POST_START,
  }
}


export const deletePostSuccess = () => {
  return {
    type: actionTypes.DELETE_POST_SUCCESS,
  }
}


export const deletePostFail = (error) => {
  return {
    type: actionTypes.DELETE_POST_FAIL,
    error: error
  }
}

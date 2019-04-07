import * as actionTypes from '../actions/actionTypes';

const initialState = {
  posts: [],
  loading: false,
  error: null,
  newPost: {post: null, loading: null, error: null}
}

const createPostStart = (state, action) => {
  return {...state, ...{loading: true}}
}

const createPostSuccess = ( state, action ) => {
  return {
    ...state,
    newPost: {
      post: action.post,
      loading: false
    }
  }
}

const createPostFail = ( state, action ) => {
  return {...state, ...{
    loading: false
  }}
}

const fetchPostsStart = (state, action) => {
  return {...state, ...{loading: true}}
}

const fetchPostsSuccess = ( state, action ) => {
  return {...state, ...{
    posts: action.posts,
    loading: false
  }}
}

const fetchPostsFail = ( state, action ) => {
  return {...state, ...{
    loading: false
  }}
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
  case actionTypes.FETCH_POSTS_START: return fetchPostsStart( state, action );
  case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess( state, action );
  case actionTypes.FETCH_POSTS_FAIL: return fetchPostsFail( state, action );
  case actionTypes.CREATE_POST_START: return createPostStart( state, action );
  case actionTypes.CREATE_POST_SUCCESS: return createPostSuccess( state, action );
  case actionTypes.CREATE_POST_FAIL: return createPostFail( state, action );
  default: return state;
  }
}

export default reducer;

import * as actionTypes from '../actions/actionTypes';

const initialState = {
  posts: [],
  loading: false,
  error: null,
}

const fetchPostsStart = (state, action) => {
  return {...state, ...{loading: true}}
}

const fetchPostsSuccess = ( state, action ) => {
  console.log(action)
  console.log(state)
  return {...state, ...{
    posts: action.posts,
    loading: false
  }}
};

const fetchPostsFail = ( state, action ) => {
  return {...state, ...{
    loading: false
  }}
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
  case actionTypes.FETCH_POSTS_START: return fetchPostsStart( state, action );
  case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess( state, action );
  case actionTypes.FETCH_POSTS_FAIL: return fetchPostsFail( state, action );
  default: return state;
  }
}

export default reducer;

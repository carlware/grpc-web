import * as actionTypes from '../actions/actionTypes';

const initialState = {
  posts: [],
  loading: false,
  error: null,
  newPost: {post: null, loading: null, error: null},
  readPost: {postId: 1, loading: null, error: null, post: null},
  updatePost: {post: null, loading: null, error: null},
  deletePost: {postId: null, loading: false, error: null}
}

const deletePostStart = (state, action) => {
  return {
    ...state,
    deletePost: {
      postId: action.postId,
      loading: true
    }
  }
}

const deletePostSuccess = ( state, action ) => {
  return {
    ...state,
    deletePost: {
      loading: false
    }
  }
}

const deletePostFail = ( state, action ) => {
  return {
    ...state,
    deletePost: {
      loading: false
    }
  }
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
  console.log(' ==== fecth posts ===')
  console.log('fetch post state', state)
  console.log('fetch post state', action)
  console.log(' ==== fecth posts ===')
  return {...state, ...{loading: true}}
}

const fetchPostsSuccess = ( state, action ) => {
  console.log(' ==== fecth posts s ===')
  console.log('fetch post s state', state)
  console.log('fetch post s state', action)
  console.log(' ==== fecth s posts ===')
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

const readPostStart = (state, action) => {
  return {
    ...state,
    readPost: {
      postId: action.postId,
      loading: true
    }
  }
}

const readPostSuccess = ( state, action ) => {
  return {
    ...state,
    readPost: {
      loading: false,
      post: action.post
    }
  }
}

const readPostFail = ( state, action ) => {
  return {
    ...state,
    readPost: {
      loading: false
    }
  }
}

const updatePostStart = (state, action) => {
  return {
    ...state,
    updatePost: {
      post: action.post,
      loading: true
    }
  }
}

const updatePostSuccess = ( state, action ) => {
  return {
    ...state,
    updatePost: {
      loading: false
    }
  }
}

const updatePostFail = ( state, action ) => {
  return {
    ...state,
    updatePost: {
      loading: false
    }
  }
}
const reducer = ( state = initialState, action ) => {
  console.log('===== reducer =====')
  console.log(state)
  console.log(action)
  console.log('===== reducer =====')
  switch ( action.type ) {
  case actionTypes.FETCH_POSTS_START: return fetchPostsStart( state, action );
  case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess( state, action );
  case actionTypes.FETCH_POSTS_FAIL: return fetchPostsFail( state, action );
  case actionTypes.CREATE_POST_START: return createPostStart( state, action );
  case actionTypes.CREATE_POST_SUCCESS: return createPostSuccess( state, action );
  case actionTypes.CREATE_POST_FAIL: return createPostFail( state, action );
  case actionTypes.DELETE_POST_START: return deletePostStart( state, action );
  case actionTypes.DELETE_POST_SUCCESS: return deletePostSuccess( state, action );
  case actionTypes.DELETE_POST_FAIL: return deletePostFail( state, action );
  case actionTypes.READ_POST_START: return readPostStart( state, action );
  case actionTypes.READ_POST_SUCCESS: return readPostSuccess( state, action );
  case actionTypes.READ_POST_FAIL: return readPostFail( state, action );
  case actionTypes.UPDATE_POST_START: return updatePostStart( state, action );
  case actionTypes.UPDATE_POST_SUCCESS: return updatePostSuccess( state, action );
  case actionTypes.UPDATE_POST_FAIL: return updatePostFail( state, action );
  default: return state;
  }
}

export default reducer;

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'


const INITIAL_STATE = Immutable({
  error: null,
  loading: false,
  token: null,
  userId: null,
  authRedirectPath: '/',
})

const { Types, Creators } = createActions({
  clear: null,
  authStart: null,
  authSuccess: ['token', 'userId'],
  authFail: ['error'],
  authLogoutStart: null,
  authLogoutSuccess: null,
  authCheckTimeout: ['expirationTime'],
  authSetRedirectPath: ['path'],
  authCheckState: null,
})

export const AuthTypes = Types
export const Actions = Creators


export const clear = (state) => INITIAL_STATE

const authStart = ( state, action ) => {
  return state.mege({ error: null, loading: true })
}

const authSuccess = (state, action) => {
  return state.merge({
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false
  })
}

const authFail = (state, action) => {
  return state.merge({
    error: action.error,
    loading: false
  })
}

const authLogoutStart = (state, action) => {
  return state.merge({ token: null, userId: null })
}

const authSetRedirectPath = (state, action) => {
  return state.merge({ authRedirectPath: action.path })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CLEAR]: clear,
  [Types.AUTH_START]: authStart,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAIL]: authFail,
  [Types.AUTH_LOGOUT_START]: authLogoutStart,
  [Types.AUTH_SET_REDIRECT_PATH]: authSetRedirectPath,
})

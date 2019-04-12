import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"

import * as Sagas from '../sagas/index'

const composeEnhancers =
      process.env.NODE_ENV === "development"
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : null || compose;

const rootReducer = combineReducers({
  blog: require('../redux/blog').reducer
})

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(Sagas.watchPosts)

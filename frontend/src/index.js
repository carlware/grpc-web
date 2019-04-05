import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"

import blogReducer from './store/reducers/blog'
import { watchPosts } from './store/sagas/index'

const composeEnhancers =
  process.env.NODE_ENV === "development"
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;

const rootReducer = combineReducers({
  blog: blogReducer
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(watchPosts)

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

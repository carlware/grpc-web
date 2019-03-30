/* eslint-disable */

import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Layout from './hoc/Layout/Layout'
import Blog from './containers/Blog/Blog'
// const { CreateBlogRequest, Blog } = require('./blogpb/blog_pb.js')
// const { BlogServiceClient } = require('./blogpb/blog_grpc_web_pb.js')
// let service = new BlogServiceClient('http://localhost:8080');


class App extends React.Component {

  render() {
    return (
        <Layout>
        <Router>
        <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
        <li><NavLink to="/blog/">Blog</NavLink></li>
        </ul>
        </nav>
        <Route exact={true} path="/blog" component={Blog}/>
        </Router>
        </Layout>
    )
  }
}

export default App;

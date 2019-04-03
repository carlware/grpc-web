/* eslint-disable */

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Layout from './hoc/Layout/Layout'
import Blog from './containers/Blog/Blog'

// const { CreateBlogRequest, Blog } = require('./blogpb/blog_pb.js')
// const { BlogServiceClient } = require('./blogpb/blog_grpc_web_pb.js')
// let service = new BlogServiceClient('http://localhost:8080');


class App extends React.Component {

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/blog" component={Blog}/>
          <Route render={() => <p>not found</p>}/>
        </Switch>
      </Layout>
    )
  }
}

export default App;

/* eslint-disable */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const { CreateBlogRequest, Blog } = require('./blogpb/blog_pb.js')
const { BlogServiceClient } = require('./blogpb/blog_grpc_web_pb.js')

let service = new BlogServiceClient('http://localhost:8080');


class App extends Component {

  componentDidMount() {
    console.log("redered")
    let request = new CreateBlogRequest()
    let blog = new Blog()
    blog.setTitle("web grpc")
    request.setBlog(blog)
    service.createBlog(request, {}, (err, resp) => {
      console.log("error", err)
      window.RESP = resp
      console.log("response", resp.getBlog().getTitle())
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

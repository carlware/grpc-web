/* eslint-disable */

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Layout from './hoc/Layout/Layout'
import Blog from './containers/Blog/Blog'
import Index from './components/Index'


class App extends React.Component {

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/blog" component={Blog}/>
          <Route render={() => <p>not found</p>}/>
        </Switch>
      </Layout>
    )
  }
}

export default App;

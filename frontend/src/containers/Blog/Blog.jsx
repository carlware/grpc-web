import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BlogItem from '../../containers/Blog/BlogItem/BlogItem'
import BlogList from './BlogList/BlogList'
import BlogNew from './BlogNew/BlogNew'


class Blog extends React.Component {

  constructor(match) {
    super()
    this.match = match
  }

  render(){
    return(
      <div>
        <Switch>
        <Route path="/blog" exact component={BlogList}/>
        <Route path="/blog/new" component={BlogNew}/>
        <Route path="/blog/:id" component={BlogItem}/>
        <Route exact path={this.match.url}
          render={() => (
            <div style={{ textAlign:'center'}}>Please select a product.</div>
          )}/>
        </Switch>
      </div>
    )
  }
}

export default Blog

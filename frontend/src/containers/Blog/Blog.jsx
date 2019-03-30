import React from 'react'
import { Link, Route } from 'react-router-dom'
import BlogItem from '../../containers/Blog/BlogItem/BlogItem'


const DATA = [
  {
    id: 1,
    title: 'random 1'
  },
  {
    id: 2,
    title: 'random 2'
  },
  {
    id: 3,
    title: 'random 3'
  },
]


class Blog extends React.Component {

  constructor(match) {
    super()
    this.match = match
    console.log(this.match)
  }

  render(){
    var linkList = DATA.map((item) => {
      return(
        <li key={item.id}>
          <Link to={`${this.match.url}/${item.id}`}>{item.title}</Link>
        </li>
      )})

    return(
      <div>
        <ul>
          {linkList}
        </ul>
        <Route path={`${this.match.url}/:itemId`} render={ (props) => <BlogItem {...props} />}/>
        <Route exact path={this.match.url}
          render={() => (
            <div style={{ textAlign:'center'}}>Please select a product.</div>
          )}/>
      </div>
    )
  }
}

export default Blog

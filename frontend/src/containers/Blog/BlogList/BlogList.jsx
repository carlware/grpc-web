import React from 'react'
import { Link } from 'react-router-dom'
import {
  Fab
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon'

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


class BlogList extends React.Component {

  constructor(match) {
    super()
    this.match = match
  }

  render(){
    var linkList = DATA.map((item) => {
      return(
        <li key={item.id}>
          <Link to={`/blog/${item.id}`}>{item.title}</Link>
        </li>
      )})
    return(
      <div>
        <ul>
          {linkList}
        </ul>
        <Fab><Icon>plus</Icon></Fab>
      </div>
    )
  }
}

export default BlogList

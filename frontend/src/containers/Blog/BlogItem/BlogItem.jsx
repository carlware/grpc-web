import React from 'react'

const BlogItem = (props) => {

  console.log(props)
  return (
    <h1>{props.match.params.id}</h1>
  )
}

export default BlogItem

import React from 'react'
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from '@material-ui/core'

import { connect } from 'react-redux';
const actions = require('../../../store/actions/blog.js')

class BlogItem extends React.Component {

  state = {post:{author: '', title: '', content: ''}}

  componentDidMount() {
    const postId = this.props.match.params.id
    this.props.onReadPost(postId)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, post: nextProps.post});
  }

  handleSubmit(values) {
    console.log(this.state.post)
    this.props.onUpdatePost(this.state.post)
  }

  deleteSubmit(values) {
    console.log(this.state.post)
    this.props.onDeletePost(this.props.post.id)
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const updatedPost = {...this.state.post, [name]: value}
    this.setState({...this.state, post: updatedPost})
  };

  cancel = () => {
    this.props.history.goBack()
  }

  render() {
    console.log(this.props)
    if(this.props.post === null || this.props.post === undefined )return (<div></div>)
    return (
      <div style={{flexGrow: 1, padding: '10px'}}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center">
          <Grid item xs={6} style={{width: '100%'}}>
            <Card>
              <CardContent style={{display: 'flex', flexDirection: 'column'}}>
                <TextField
                  label="Author"
                  name="author"
                  value={this.state.post.author}
                  onChange={this.handleChange}/>
                <TextField label="Title"
                  name="title"
                  value={this.state.post.title}
                  onChange={this.handleChange}/>
                <TextField label="Content" multiline={true} rows={5}
                  name="content"
                  value={this.state.post.content}
                  onChange={this.handleChange}/>
                <Button color="primary" onClick={(val) => this.handleSubmit(val)}>Submit!</Button>
                <Button color="primary" onClick={(val) => this.deleteSubmit(val)}>Delete!</Button>
                <Button color="primary" onClick={this.cancel}>Cancel!</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.blog.readPost.post,
    readPost: state.blog.readPost,
    loading: state.blog.readPost.loading,
    error: state.blog.readPost.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onReadPost: (postId) => dispatch( actions.readPost(postId) ),
    onUpdatePost: (post) => dispatch( actions.updatePost(post) ),
    onDeletePost: (postId) => dispatch( actions.deletePost(postId) )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogItem)

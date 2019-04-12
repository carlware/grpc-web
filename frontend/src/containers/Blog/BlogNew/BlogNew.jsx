import React from 'react'
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from '@material-ui/core'

import { connect } from 'react-redux';
const actions = require('../../../store/redux/blog').Actions


class BlogNew extends React.Component {
  state = {
    form: {
      author: '',
      title: '',
      content: ''
    }
  }

  handleSubmit(values) {
    console.log(this.state.form)
    this.props.onCreatePost(this.state.form)
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const updatedForm = {...this.state.form, [name]: value}
    this.setState({...this.state, form: updatedForm})
  };

  cancel = () => {
    this.props.history.goBack()
  }

  render() {
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
                  value={this.state.form.author}
                  onChange={this.handleChange}/>
                <TextField label="Title"
                  name="title"
                  value={this.state.form.title}
                  onChange={this.handleChange}/>
                <TextField label="Content" multiline={true} rows={5}
                  name="content"
                  value={this.state.form.content}
                  onChange={this.handleChange}/>
                <Button color="primary" onClick={(val) => this.handleSubmit(val)}>Submit!</Button>
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
    loading: state.blog.loading,
    error: state.blog.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreatePost: (post) => dispatch( actions.createPost(post) )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogNew)

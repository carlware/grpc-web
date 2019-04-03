import React from 'react'
import { Form, Control } from 'react-redux-form'

import TextField from '@material-ui/core/TextField'

const labelName = (props) => {
  return (
    <TextField
      id="standard-name"
      label="Name"
      value={props.name}
      margin="normal"
    />
  )
}

class BlogNew extends React.Component {

  handleSubmit(values) {
    // Do anything you want with the form value
    console.log(values);
  }

  render() {
    return (
      <Form
        model="user"
        onSubmit={(val) => this.handleSubmit(val)}
      >
        <Control.text model="user.name" component={labelName}/>

        <label>
          <Control.checkbox model="user.remember" />
          Remember me
        </label>

        <button>Submit!</button>
      </Form>
    );
  }
}

export default BlogNew

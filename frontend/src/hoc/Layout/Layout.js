import React, { Fragment} from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  withStyles,
  Toolbar,
  Typography,
  CssBaseline,
} from '@material-ui/core';

const styles = {
  toolbarButtons: {
    marginLeft: 'auto',
  },
  'toolbarButtons:a': {
    color: 'white'
  }
};

class Layout extends React.Component {

  render() {
    const {classes} = this.props
    return (
      <Fragment>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Testing WEB GRPC
            </Typography>
            <div className={classes.toolbarButtons}>
                <Link to="/blog">Blog</Link>
            </div>
          </Toolbar>
        </AppBar>
        <main>
          {this.props.children}
        </main>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Layout);

import React from 'react'
import PropTypes from 'prop-types'
import {
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});


const Index = (props) => {
  const {classes} = props
  return (
    <Paper className={classes.root} elevation={1}>
      <Typography variant="h5" component="h3">
        WEB GRPC TEST
      </Typography>
    </Paper>
  )

}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index)

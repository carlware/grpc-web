import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Fab,
  withStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core'
import {
  Add,
  Delete,
} from '@material-ui/icons'

const actions = require('../../../store/redux/blog').Actions

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});


class BlogList extends React.Component {

  goToNewBlog = () => {
    this.props.history.push('/blog/new')
  }

  componentDidMount () {
    console.log('===== did mount =====')
    this.props.onFetchPosts()
    console.log('===== did mount =====')
    console.log(this.props)
  }

  render(){
    const {classes} = this.props

    console.log(this.state)
    console.log(this.props.posts)

    if (this.props.posts === null) return(<div></div>)

    var linkList = this.props.posts.map((item) => {
      return(
        <ListItem key={item.id} component={Link} to={`/blog/${item.id}`}>
          <ListItemText
            primary={item.title}
            secondary={
              <React.Fragment>
                <Typography component="span" className={classes.inline} color="textPrimary">
                  {`${item.author}`}
                </Typography>
                {`— ${item.content}`}
              </React.Fragment>
            }
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => this.props.onDeletePost(item.id)}>
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )})
    return(
      <div style={{flexGrow: 1, padding: '10px'}}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item xs={8} style={{width: '100%'}}>
            <List className={classes.root}>
              {linkList}
            </List>
          </Grid>
        </Grid>
        <Fab color="primary" aria-label="Add" className={classes.fab}><Add onClick={this.goToNewBlog} /></Fab>
      </div>
    )
  }
}

BlogList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    posts: state.blog.posts,
    loading: state.blog.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts: () => dispatch( actions.fetchPosts() ),
    onDeletePost: (postId) => dispatch( actions.deletePost(postId) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(BlogList))

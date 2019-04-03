import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Fab,
  withStyles,
} from '@material-ui/core'
import {
  Add,
} from '@material-ui/icons'

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

const styles = theme => ({
  root: {
    width: 500,
    position: 'relative',
    minHeight: 200,
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

  render(){
    const {classes} = this.props

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
        <Fab color="primary" aria-label="Add" className={classes.fab}><Add onClick={this.goToNewBlog} /></Fab>
      </div>
    )
  }
}

BlogList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(BlogList)

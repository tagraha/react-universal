/* eslint-disable */
import { provideHooks } from 'redial'
import React from 'react'
import PropTypes from 'prop-types'
import { loadPosts } from '../actions'
import { connect } from 'react-redux'
import PostListItem from '../components/PostListItem'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet'
import { selectPosts } from '../reducer'

const redial = {
  fetch: ({ dispatch }) => dispatch(loadPosts())
}

const mapStateToProps = state => ({
  posts: selectPosts(state)
})

class PostListPage extends React.Component {
  render () {
    const { posts } = this.props
    return (
      <div className={css(styles.root)}>
        <Helmet title='Posts' />
        {posts.isLoading &&
          <div>
            <h2 className={css(styles.title)}>Loading....</h2>
          </div>}
        {!posts.isLoading &&
          posts.data.map((post, i) => <PostListItem key={post.id} post={post} />)}
      </div>
    )
  }
}

PostListPage.PropTypes = {
  posts: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 500
  },
  title: {
    fontSize: 28,
    margin: '0 auto 1.5rem',
    color: '#b7b7b7'
  }
})

export default provideHooks(redial)(connect(mapStateToProps)(PostListPage))

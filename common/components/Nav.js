/* eslint-disable */
import React from 'react'
import { IndexLink } from 'react-router'
import { Link } from 'react-router'
import { StyleSheet, css } from 'aphrodite'

class Nav extends React.Component {
  render () {
    return (
      <div>
        <IndexLink to='/' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
          Home
        </IndexLink>
        <Link to='/posts' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}> Example Feed
        </Link>
        <a href='https://github.com/tagraha/react-universal' className={css(styles.link)} target='_blank'>github</a>
        <a href='https://twitter.com/tagraha' className={css(styles.link)} target='_blank'>Twitter</a>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  link: {
    maxWidth: 700,
    color: '#999',
    margin: '1.5rem 1rem 1.5rem 0',
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: '.2s opacity ease',
    ':hover': {
      opacity: 0.6
    }
  },
  activeLink: {
    color: '#000'
  }
})

export default Nav

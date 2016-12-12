/* eslint-disable */
import React from 'react'
import Helmet from 'react-helmet'
import Nav from './Nav'
import { StyleSheet, css } from 'aphrodite'

class App extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div className={css(styles.root)}>
        <Helmet title='React Universal' titleTemplate='%s - React Universal' />
        <h1 className={css(styles.title)}>React Universal</h1>
        <Nav />
        {children}
        <footer className={css(styles.footer)}>
          Copyright © 2016 <a className={css(styles.footerLink)} href='http://twitter.com/tagraha' target='_blank'>Tirta Nugraha</a>
        </footer>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 700,
    color: '#000',
    margin: '2rem auto',
    padding: '0 1rem'
  },
  title: {
    color: '#000',
    maxWidth: 300,
    fontWeight: 'bold',
    fontSize: 56
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#b7b7b7'
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none'
  }
})

export default App

/* eslint-disable */
import React from 'react'
import Helmet from 'react-helmet'

class NotFound extends React.Component {
  render () {
    return (
      <div id='notFoundPage'>
        <Helmet title='Not Found' />
        <h1>Page Not Found!</h1>
      </div>
    )
  }
}

export default NotFound

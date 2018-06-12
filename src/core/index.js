import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Grid, Row } from 'react-bootstrap'
import Header from '../components/header'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <div style={{ height: 15000 }} />
      </div>
    )
  }
}

export default App

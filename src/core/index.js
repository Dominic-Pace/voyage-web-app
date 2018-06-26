import React, { Component } from 'react'

import LandingPage from './landing'
import Header from '../components/header'

import 'font-awesome/css/font-awesome.min.css'

class App extends Component {
  render () {
    return (
      <div id="app-container">
        <Header />
        <LandingPage />
      </div>
    )
  }
}

export default App

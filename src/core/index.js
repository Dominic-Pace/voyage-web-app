import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from '../components/header'
import LandingPage from './landing'
import routes from './routes'

import { RouteWithSubRoutes } from '../utils/router'

import 'font-awesome/css/font-awesome.min.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div id="app-container">
          <Header />
          <Route exact path="/" component={LandingPage} />
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
      </Router>
    )
  }
}

export default App

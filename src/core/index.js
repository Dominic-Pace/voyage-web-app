import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { RouteWithSubRoutes } from '../utils/router'
import * as actions from './auth/actions'

import Header from '../components/header'
import LandingPage from './landing'
import index from './routes/index'

import 'font-awesome/css/font-awesome.min.css'

class App extends Component {
  componentWillMount() {
    this.props.fetchUser()
  }
  render () {
    return (
      <Router>
        <div id="app-container">
          <Header />
          <Route exact path="/" component={LandingPage} />
          {index.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
      </Router>
    )
  }
}


const mapStateToProps = ({ auth }) => {
  const {
    user,
  } = auth

  return {
    user
  }
}
export default connect(mapStateToProps, { ...actions })(App)

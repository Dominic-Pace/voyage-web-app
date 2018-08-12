import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { RouteWithSubRoutes } from '../utils/router'
import * as actions from './auth/actions'

import Header from '../components/header'
import LandingPage from './landing'
import routes from './routes'
import { ToastContainer } from 'react-toastify'

import 'font-awesome/css/font-awesome.min.css'
import 'react-dates/lib/css/_datepicker.css'
import 'react-toastify/dist/ReactToastify.css'

class App extends Component {
  componentWillMount() {
    this.props.fetchUser()
  }

  render () {
    const { user } = this.props
    return (
      <Router>
        <div id="app-container">
          <ToastContainer />
          <Header handleLogoutClick={() => { this.props.logoutUser() }} user={user} />
          <Route exact path="/" component={LandingPage} />
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
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

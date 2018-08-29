import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { RouteWithSubRoutes } from '../utils/router'
import * as actions from './auth/actions'
import routes from './routes'

import Header from '../components/header'
import LandingPage from './landing'
import Spinner from 'react-spinkit'
import { ToastContainer } from 'react-toastify'

import 'font-awesome/css/font-awesome.min.css'
import 'react-toastify/dist/ReactToastify.css'
import DashboardView from './dashboard'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render () {
    const { isAuthed, isRequestingUser, user } = this.props
    return (
      <Router>
        <div id="app-container">
          {
            isRequestingUser
            ?
              <div className="app-spinner">
                <Spinner name="three-bounce" />
              </div>
              :
              <React.Fragment>
                <ToastContainer />
                <Header handleLogoutClick={() => { this.props.logoutUser() }} user={user} />
                <Route exact path="/" component={isAuthed ? DashboardView : LandingPage} />
                {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
              </React.Fragment>
          }

        </div>
      </Router>
    )
  }
}


const mapStateToProps = ({ auth }) => {
  const {
    isAuthed,
    isRequestingUser,
    user,
  } = auth

  return {
    isAuthed,
    isRequestingUser,
    user
  }
}
export default connect(mapStateToProps, { ...actions })(App)

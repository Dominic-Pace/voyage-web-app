import React from 'react'

import NavItem from './item'
import Icon from "../../icons";

const homePath = '/'
const authPath = '/auth'
const explorePath = '/explore'
const userPath = '/user'

const NavigationTabs = ({ handleLogoutClick, user }) => (
  <div className="nav-header float-lg-right">
    <div className="nav-container">
      {
        user ?
          <NavItem
            linkTo={homePath}
            selected={window.location.pathname === homePath}
          >
            Dashboard
          </NavItem>
          :
          <NavItem
            linkTo={homePath}
            selected={window.location.pathname === homePath}
          >
            Home
          </NavItem>
      }
      <NavItem
        linkTo={explorePath}
        selected={
          window.location.pathname.includes(explorePath) ||
          window.location.pathname.includes('package') ||
          window.location.pathname.includes('booking')
        }
      >
        Explore
      </NavItem>
      {
        user ?
          <NavItem
            handleClick={handleLogoutClick}
            linkTo={homePath}
            selected={false}
          >
            Logout
          </NavItem>
          :
          <NavItem
            linkTo={authPath}
            selected={ window.location.pathname.includes('auth') }
          >
            Login
          </NavItem>
      }
      {
        user ?
          <NavItem
            linkTo={userPath}
            selected={false}
          >
            {
              window.location.pathname.includes('user')
              ?
                <Icon size={28} type="userSelected"/>
                :
                <Icon size={28} type="user"/>
            }
          </NavItem>
          :
          null
      }
    </div>
  </div>
)

export default NavigationTabs

import React from 'react'

const UserProfile = () => (
  <div className="user-header">
    <div className="user">
      <div className="name">Dominic Pace</div>
      <div className="image"><img src="https://avatars2.githubusercontent.com/u/12464763?s=400&u=46bb9b620d5c30556da31cb969d381af6e506ece&v=4" alt="profile" /></div>
    </div>
  </div>
)

const LoginSignUp = () => (
  <div className="user-header">
    <div className="user">
      <span className="name">Login</span>
      <span className="name">Sign Up</span>
    </div>
  </div>
)

const RightNavigation = () =>  (
  <UserProfile/>
)

export default RightNavigation

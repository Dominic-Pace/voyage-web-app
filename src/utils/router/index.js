import React from 'react'
import { Route } from 'react-router-dom'

export const RouteWithSubRoutes = (route, user) => {
  return (
    <Route
      exact={route.exact || false}
      path={route.path}
      render={routeProps => (
        <route.component {...routeProps} routes={route.routes} />
      )}
      user={user}
    />
  )
}

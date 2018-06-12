import React from 'react'
import { Route } from 'react-router-dom'

export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={routeProps => (
      <route.component {...routeProps} routes={route.routes} />
    )}
  />
)

import React, { Suspense } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import routerMap from './routerMap'

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          {routerMap.map(item => {
            return (
              <Route
                exact={true}
                key={item.path}
                path={item.path}
                component={item.component}
              />
            )
          })}
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App

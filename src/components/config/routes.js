import React from 'react'
import Login from '../screens/login'
import Home from '../screens/home'

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route path='/home' component={Home}></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes

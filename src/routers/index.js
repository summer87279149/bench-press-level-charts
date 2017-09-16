import React from 'react'
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import CounterContainer from '@/containers/Home'

const routes = (
  <BrowserRouter>
        <Route exact path="/" component={CounterContainer} />
  </BrowserRouter>
)

export default routes

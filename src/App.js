import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CustomerTable from './components/CustomerTable'
import CustomerPage from './components/CustomerPage'
import Header from './components/Header'

import './App.scss'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/customer/:id'>
            <CustomerPage />
          </Route>
          <Route path='/'>
            <CustomerTable />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

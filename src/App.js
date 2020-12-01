import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CustomerTable from './components/CustomerTable'
import CustomerPage from './components/CustomerPage'

import './App.scss'

function App() {
  return (
    <div className='App'>
      <h1>🏎️ 🚙 🚗</h1>
      <Router>
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

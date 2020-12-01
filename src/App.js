import React from 'react'

import CustomerTable from './components/CustomerTable'
import Search from './components/Search'
import Filters from './components/Filters'

import './App.scss'

function App() {
  return (
    <div className='App'>
      <h1>🏎️ 🚙 🚗</h1>
      <Search />
      <Filters />
      <CustomerTable />
    </div>
  )
}

export default App

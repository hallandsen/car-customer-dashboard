import React, { useState } from 'react'

import DataTable from './components/DataTable'
import Search from './components/Search'
import Filters from './components/Filters'
import { filterOptions } from './utilities/filterOptions'
import rows from './data/scheme-sketch.json'

import './App.scss'

function App() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState(filterOptions.customerName)

  const handleSearch = (event) => {
    const text = event.target.value
    setSearch(text)
  }

  const handleFilterChange = (filter) => () => {
    setFilter(filter)
  }

  const filterMethod = (row) => filter.method(search, row)
  const filteredRows = rows.filter(filterMethod)

  return (
    <div className='App'>
      <h1>🏎️ 🚙 🚗</h1>
      <Search
        search={search}
        onSearch={handleSearch}
        filterName={filter.name}
      />
      <Filters
        filters={filterOptions}
        handleChange={handleFilterChange}
        activeFilter={filter}
      />
      <DataTable rows={filteredRows} />
    </div>
  )
}

export default App

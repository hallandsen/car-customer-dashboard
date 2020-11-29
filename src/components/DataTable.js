import React, { useState } from 'react'

import Search from './Search'
import { formatDate } from '../utilities/dateTime'

import '../styles/DataTable.scss'

const DataTable = ({ rows }) => {
  const [search, setSearch] = useState('')

  const handleSearch = (event) => {
    const text = event.target.value
    setSearch(text)
  }

  return (
    <div className='data-table'>
      <Search
        search={search}
        onSearch={handleSearch}
      />
      <div className='data-table__row-header'>
        <div>Name</div>
        <div>Surname</div>
        <div>Address</div>
        <div>Age</div>
        <div>Register date</div>
      </div>
      {rows.map(row => (
        <div className='data-table__row' key={row.customer.created}>
          <div>
            {row.customer.name}
          </div>
          <div>
            {row.customer.surname}
          </div>
          <div>
            {row.customer.address}
          </div>
          <div>
            {row.customer.age}
          </div>
          <div>
            {formatDate(row.customer.created)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DataTable
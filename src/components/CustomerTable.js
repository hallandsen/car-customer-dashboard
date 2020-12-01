import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectSearch, selectCustomers, selectActiveFilter, selectFilters, setActiveFilter, setSearch } from '../store/reducers/customersSlice'
import Table from './Table'
import Search from './Search'
import Filters from './Filters'
import CustomerRow from './CustomerRow'

import { customerLabels } from '../utilities/tableLabels'

const CustomerTable = () => {
  const customers = useSelector(selectCustomers)
  const activeFilter = useSelector(selectActiveFilter)
  const filters = useSelector(selectFilters)
  const search = useSelector(selectSearch)

  const dispatch = useDispatch()

  const handleSelectFilter = (filter) => () => {
    dispatch(setActiveFilter(filter))
  }

  const handleSearchChange = (event) => {
    const text = event.target.value
    dispatch(setSearch(text))
  }

  const customerDetails = customers.map(customer => customer.customerDetails)

  return (
    <div>
      <Search
        search={search}
        handleChange={handleSearchChange}
        activeFilter={activeFilter}
      />
      <Filters
        filters={filters}
        activeFilter={activeFilter}
        onSelect={handleSelectFilter}
      />
      <Table
        rows={customerDetails}
        labels={customerLabels}
        RowComponent={CustomerRow}
      />
    </div>
  )
}

export default CustomerTable
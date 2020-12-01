import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectSearch, selectRows, selectActiveFilter, selectFilters, setActiveFilter, setSearch } from '../store/reducers/customersSlice'
import Table from './Table'
import Search from './Search'
import Filters from './Filters'

const CustomerTable = () => {
  const rows = useSelector(selectRows)
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
      <Table rows={rows} />
    </div>
  )
}

export default CustomerTable
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectSearch, selectActiveFilter, setSearch } from '../store/reducers/customersSlice'
import '../styles/Search.scss'

const Search = () => {
  const search = useSelector(selectSearch)
  const activeFilter = useSelector(selectActiveFilter)
  const dispatch = useDispatch()

  const placeholder = `Search${activeFilter ? ' by ' : ''}${activeFilter?.toLowerCase() || ''}`

  const handleSearchChange = (event) => {
    const text = event.target.value
    dispatch(setSearch(text))
  }

  return (
    <input
      type='search'
      className='Search'
      placeholder={placeholder}
      value={search}
      onChange={handleSearchChange}
    />
  )
}

export default Search

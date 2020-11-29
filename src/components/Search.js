import React from 'react'

import '../styles/Search.scss'

const Search = ({ onSearch, search, filterName }) => (
  <input
    type='search'
    className='Search'
    placeholder={`Search by ${filterName.toLowerCase()}`}
    value={search}
    onChange={onSearch}
  />
)

export default Search

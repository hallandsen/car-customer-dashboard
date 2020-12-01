import React from 'react'

import '../styles/Search.scss'

const Search = ({ search, activeFilter, handleChange }) => {
  const placeholder = `Search${activeFilter ? ' by ' : ''}${activeFilter?.toLowerCase() || ''}`

  return (
    <input
      type='search'
      className='Search'
      placeholder={placeholder}
      value={search}
      onChange={handleChange}
    />
  )
}

export default Search

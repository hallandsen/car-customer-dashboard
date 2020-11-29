import React from 'react'

const Search = ({ onSearch, search }) => (
  <input
    type="search"
    className="data-table__search"
    placeholder="Søg brugere"
    value={search}
    onChange={onSearch}
  />
)

export default Search

import React from 'react'

import Filter from './Filter'

import '../styles/Filters.scss'

const Filters = ({ filters, activeFilter, onSelect }) => (
  <div className='filters'>
    <div className='filters__row'>
      {filters.map(filter => (
        <Filter
          filter={filter}
          key={filter}
          handleChange={onSelect(filter)}
          activeFilter={activeFilter}
        />
      )
      )}
    </div>
  </div>
)

export default Filters
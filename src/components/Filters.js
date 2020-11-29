import React from 'react'

import Filter from './Filter'

import '../styles/Filters.scss'

const Filters = ({ filters, handleChange, activeFilter }) => {
  return (
    <div className='filters'>
      <div className='filters__row'>
        {Object.keys(filters).map(key => {
          const filter = filters[key]
          return (
            <Filter
              filter={filter}
              key={filter.name}
              handleChange={handleChange(filter)}
              activeFilter={activeFilter}
            />
          )
        }
        )}
      </div>
    </div>
  )
}

export default Filters
import React from 'react'

const Filter = ({ filter, handleChange, activeFilter }) => (
  <div className='filters__item'>
    <label htmlFor={filter}>{filter}</label>
    <input
      type='checkbox'
      id={filter}
      onChange={handleChange}
      checked={filter === activeFilter}
    />
  </div>
)

export default Filter
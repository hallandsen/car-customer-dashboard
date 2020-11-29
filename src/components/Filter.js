import React from 'react'

const Filter = ({ filter, handleChange, activeFilter }) => {
  const { name } = filter
  const active = name === activeFilter?.name

  return (
    <div className='filters__item' key={name}>
      <label htmlFor={name}>{name}</label>
      <input type='checkbox' id={name} onChange={handleChange} checked={active} />
    </div>
  )
}

export default Filter
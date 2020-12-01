import React from 'react'

import Filter from './Filter'
import { useSelector, useDispatch } from 'react-redux'

import { selectActiveFilter, selectFilters, setActiveFilter } from '../store/reducers/customersSlice'

import '../styles/Filters.scss'

const Filters = () => {
  const activeFilter = useSelector(selectActiveFilter)
  const filters = useSelector(selectFilters)
  const dispatch = useDispatch()

  const handleChange = (filter) => () => {
    dispatch(setActiveFilter(filter))
  }

  return (
    <div className='filters'>
      <div className='filters__row'>
        {filters.map(filter => (
          <Filter
            filter={filter}
            key={filter}
            handleChange={handleChange(filter)}
            activeFilter={activeFilter}
          />
        )
        )}
      </div>
    </div>
  )
}

export default Filters
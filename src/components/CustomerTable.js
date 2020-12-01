import React from 'react'
import { useSelector } from 'react-redux'

import { selectRows } from '../store/reducers/customersSlice'
import Row from './Row'
import '../styles/DataTable.scss'

const CustomerTable = () => {
  const rows = useSelector(selectRows)

  return (
    <div className='DataTable'>

      <div className='DataTable__row-header'>
        <div>Name</div>
        <div>Surname</div>
        <div>Address</div>
        <div>Age</div>
        <div>Register date</div>
      </div>

      <div className='DataTable__rows'>
        {rows.map(row => (
          <Row row={row} key={row.customerDetails.created} />
        ))}
      </div>

    </div>
  )
}

export default CustomerTable
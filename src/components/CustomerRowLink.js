import React from 'react'
import { Link } from 'react-router-dom'

import { formatDate } from '../utilities/dateTime'

const CustomerRow = link => ({ row }) => (
  <Link
    to={`/customer/${row.created}`}
    className='DataTable__row'
  >
    <div>{row.name}</div>
    <div>{row.surname}</div>
    <div>{row.address}</div>
    <div>{row.age}</div>
    <div>{formatDate(row.created)}</div>
  </Link>
)

export default CustomerRow
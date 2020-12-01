import React from 'react'
import { Link } from 'react-router-dom'

import { formatDate } from '../utilities/dateTime'

const SalesPersonRow = ({ row }) => (
  <Link to={`/customer/${row.created}`}
    className='DataTable__row'
  >
    <div>{row.name}</div>
    <div>{row.jobTitle}</div>
    <div>{row.address}</div>
    <div>{formatDate(row.created)}</div>
  </Link>
)

export default SalesPersonRow
import React from 'react'
import { Link } from 'react-router-dom'

import { formatDate } from '../utilities/dateTime'

const PurchaseRow = ({ row }) => (
  <Link to={`/customer/${row.created}`}
    className='DataTable__row'
  >
    <div>{row.price}</div>
    <div>{formatDate(row.orderDate)}</div>
    <div>{row.make}</div>
    <div>{row.model}</div>
    <div>{row.color}</div>
    <div>{row.extras.join(', ')}</div>
    <div>{row.recommendedPrice}</div>
  </Link>
)

export default PurchaseRow
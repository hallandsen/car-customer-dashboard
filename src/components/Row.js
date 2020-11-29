import React from 'react'

import { formatDate } from '../utilities/dateTime'

const Row = ({ row }) => (
  <div className='DataTable__row'>
    <div>{row.customer.name}</div>
    <div>{row.customer.surname}</div>
    <div>{row.customer.address}</div>
    <div>{row.customer.age}</div>
    <div>{formatDate(row.customer.created)}</div>
  </div>
)

export default Row
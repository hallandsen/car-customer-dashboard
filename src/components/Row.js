import React from 'react'

import { formatDate } from '../utilities/dateTime'

const Row = ({ row }) => (
  <div className='DataTable__row'>
    <div>{row.customerDetails.name}</div>
    <div>{row.customerDetails.surname}</div>
    <div>{row.customerDetails.address}</div>
    <div>{row.customerDetails.age}</div>
    <div>{formatDate(row.customerDetails.created)}</div>
  </div>
)

export default Row
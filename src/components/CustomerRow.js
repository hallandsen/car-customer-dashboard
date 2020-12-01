import React from 'react'

import { formatDate } from '../utilities/dateTime'
import Row from './Row'

const CustomerRow = ({ row }) => (
  <Row>
    <div>{row.name}</div>
    <div>{row.surname}</div>
    <div>{row.address}</div>
    <div>{row.age}</div>
    <div>{formatDate(row.created)}</div>
  </Row>
)

export default CustomerRow
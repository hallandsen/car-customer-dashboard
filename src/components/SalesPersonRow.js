import React from 'react'

import { formatDate } from '../utilities/dateTime'
import Row from './Row'

const SalesPersonRow = ({ row }) => (
  <Row>
    <div>{row.name}</div>
    <div>{row.jobTitle}</div>
    <div>{row.address}</div>
    <div>{formatDate(row.created)}</div>
  </Row>
)

export default SalesPersonRow
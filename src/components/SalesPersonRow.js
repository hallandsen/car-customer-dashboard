import React from 'react'

import { formatPrice } from '../utilities/formatPrice'
import Row from './Row'

const SalesPersonRow = ({ row }) => (
  <Row>
    <div>{row.name}</div>
    <div>{row.jobTitle}</div>
    <div>{row.address}</div>
    <div>{formatPrice(row.salary)}</div>
  </Row>
)

export default SalesPersonRow
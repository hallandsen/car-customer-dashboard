import React from 'react'

import { formatDate } from '../utilities/dateTime'
import Row from './Row'

const PurchaseRow = ({ row }) => (
  <Row>
    <div>{row.price}</div>
    <div>{formatDate(row.created)}</div>
    <div>{row.make}</div>
    <div>{row.model}</div>
    <div>{row.color}</div>
    <div>{row.extras.join(', ')}</div>
    <div>{row.recommendedPrice}</div>
  </Row>
)

export default PurchaseRow
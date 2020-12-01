import React from 'react'

import { formatDate } from '../utilities/dateTime'
import { formatPrice } from '../utilities/formatPrice'
import Row from './Row'

const PurchaseRow = ({ row }) => (
  <Row>
    <div>{formatPrice(row.price)}</div>
    <div>{formatDate(row.orderDate)}</div>
    <div>{row.make}</div>
    <div>{row.model}</div>
    <div>{row.color}</div>
    <div>{row.extras.join(', ')}</div>
    <div>{formatPrice(row.recommendedPrice)}</div>
  </Row>
)

export default PurchaseRow
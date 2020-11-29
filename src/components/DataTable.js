import React from 'react'

import '../styles/DataTable.scss'

const DataTable = ({ purchases }) => {
  return (
    <div className='data-table'>
    {purchases.map(purchase => (
        <div className='data-table__row'>
          <div>
            {purchase.customer.name}
          </div>
          <div>
            {purchase.customer.surname}
          </div>
          <div>
            {purchase.customer.address}
          </div>
          <div>
            {purchase.customer.age}
          </div>
          <div>
            {purchase.customer.created}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DataTable
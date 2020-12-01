import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Table from './Table'
import CustomerRow from './CustomerRow'
import SalesPersonRow from './SalesPersonRow'
import PurchaseRow from './PurchaseRow'
import { selectCustomer } from '../store/reducers/customersSlice'
import { customerLabels, salesPersonLabels, purchaseLabels } from '../utilities/tableLabels'

import '../styles/CustomerPage.scss'

const CustomerPage = () => {
  const { id } = useParams()
  const { customerDetails, salesPerson, purchases } = useSelector(selectCustomer(id))

  return (
    <div className='CustomerPage'>
      <h4>Customer</h4>
      <Table
        rows={[customerDetails]}
        labels={customerLabels}
        RowComponent={CustomerRow}
        type='customer'
      />
      <h4>Sales person</h4>
      <Table
        rows={[salesPerson]}
        labels={salesPersonLabels}
        RowComponent={SalesPersonRow}
        type='sales'
      />
      <h4>Purchases</h4>
      <Table
        rows={purchases}
        labels={purchaseLabels}
        RowComponent={PurchaseRow}
        type='purchases'
      />
    </div>
  )
}

export default CustomerPage
import React from 'react'
import { Link } from 'react-router-dom'

const CustomerRow = ({ link, children }) => link ? (
    <Link to={link}
    className='DataTable__row'
  >
    {children}
  </Link>
) : (
   <div className='DataTable__row'>
    {children}
  </div>
)

export default CustomerRow
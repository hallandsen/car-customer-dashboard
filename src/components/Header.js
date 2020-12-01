import React from 'react'
import { useLocation } from 'react-router-dom'

import { ReactComponent as BackIcon } from '../assets/left-arrow.svg'
import { Link } from 'react-router-dom'

import '../styles/Header.scss'

const Header = () => {
  const { pathname } = useLocation()
  const showBack = pathname.includes('customer')

  return (
    <div className='Header'>
      <div className='Header__container'>
        {showBack && <Link to='/' className='Header__link'><BackIcon /></Link>}
        <h2>🚙  Dashboard  🚗</h2>
      </div>
    </div>
  )
}

export default Header
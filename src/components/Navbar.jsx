import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>
      <Link to='/'>
      <div>Home</div>
      </Link>
      <Link to='/items'>
      <div>Food</div>
      </Link>
    </div>
  )
}

export default Navbar

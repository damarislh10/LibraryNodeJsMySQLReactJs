import React from 'react'

export const Navbar = ({brand}) => {
  return (
    <nav className='navbar navbar-dark bg-dark mb-5'>
        <div className='container'>
            <a href='#!' className='navbar-brand'>{brand}</a>
        </div>
    </nav>
  )
}

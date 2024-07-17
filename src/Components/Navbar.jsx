// src/components/Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-emerald-800 py-3'>
        <div className="container flex justify-between items-center px-5">
            <div className='text-white font-bold text-2xl'>
              My Project
            </div>
            <div >
                <Link to="/" className='text-white font-mono font-bold text-lg'>Home</Link>
                <Link to="/task view" className='text-white font-mono font-bold text-lg px-5'>Task View</Link>
                <Link to="/contacts"className='text-white font-mono font-bold text-lg '>Contacts</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar

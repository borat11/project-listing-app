import React from 'react'
import Navbar from '../src/Components/Navbar'
import { Outlet } from 'react-router-dom'

const RootlayOut = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default RootlayOut
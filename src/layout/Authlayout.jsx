import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router'

const Authlayout = () => {
  return (
    <div>

        <header>
            <Navbar></Navbar>
        </header>

        <main className='w-11/12 mx-auto py-5'>
            <Outlet></Outlet>
        </main>
    </div>
  )
}

export default Authlayout
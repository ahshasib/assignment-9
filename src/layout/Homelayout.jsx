import React, { Suspense } from 'react'
import Navbar from '../Component/Navbar'

import Home from '../Pages/Home'
import { Outlet } from 'react-router'


const Homelayout = () => {
  return (
    <>
    <header>
        <Navbar></Navbar>
    </header>



    <main className='bg-black'>
        <section>
           <Outlet></Outlet>
        </section>
    </main>



    <footer>

    </footer>
    
    </>
  )
}

export default Homelayout
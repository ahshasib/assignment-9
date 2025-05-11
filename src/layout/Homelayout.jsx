import React, { Suspense } from 'react'
import Navbar from '../Component/Navbar'

import Home from '../Pages/Home'
import { Outlet } from 'react-router'
import Footer from '../Component/Footer'


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
    <Footer></Footer>
    </footer>
    
    </>
  )
}

export default Homelayout
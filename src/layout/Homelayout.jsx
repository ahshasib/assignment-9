import React, { Suspense } from 'react'
import Navbar from '../Component/Navbar'

import Home from '../Pages/Home'
import { Outlet } from 'react-router'
import Footer from '../Component/Footer'
import LastSection from '../Component/LastSection'


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
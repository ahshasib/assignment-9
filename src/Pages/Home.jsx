import React, { Suspense } from 'react'
import Slider_com from '../Component/Slider_com'
import Events from '../Component/Events'
import { Helmet } from 'react-helmet-async'
import LastSection from '../Component/LastSection'

const Home = () => {
  return (
    <div>

      <Helmet>
        <title>Home | Local Events</title>
      </Helmet>
    <div>
                <Slider_com></Slider_com>
                
            </div>
            
            <div >
            <h1 className='text-white text-4xl py-10 w-11/12 mx-auto text-center font-bold'><span className='text-yellow-500 text-5xl'>Discover</span> the Full Lineup of <span>Events</span></h1>
                <Suspense fallback={<><span class="loading loading-bars loading-sm"></span></>}>
                    <Events></Events>
                </Suspense>

                <section>
                <LastSection></LastSection>
               </section>
            </div>
    </div>
  )
}

export default Home
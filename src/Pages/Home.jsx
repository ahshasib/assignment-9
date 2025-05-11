import React, { Suspense } from 'react'
import Slider_com from '../Component/Slider_com'
import Events from '../Component/Events'
import { Helmet } from 'react-helmet-async'

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
            <h1 className='text-white text-4xl py-3 w-11/12 mx-auto'>All Events</h1>
                <Suspense fallback={<><span class="loading loading-bars loading-sm"></span></>}>
                    <Events></Events>
                </Suspense>
            </div>
    </div>
  )
}

export default Home
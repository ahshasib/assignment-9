import React from 'react'
import { Link } from 'react-router'


const Slider_com = () => {
  return (
    <>
    <div className="w-full ">
      <div className="carousel w-full md:h-[55vh]">
        
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="nightshow.png"
            className="w-full  object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Text */}
          <div className="absolute top-1/3 md:top-1/3 left-1/7 text-white z-10 md:space-y-2">
            <h2 className="text-2xl md:text-6xl font-bold">Night of Classical Music</h2>
            <p className=" text-gray-300  text-md md:text-2xl">Enjoy the best deals and offersEnjoy the <br /> best deals and offers</p>
            <Link className='btn font-bold shadow-2xl bg-yellow-500 md:mt-3'>View More</Link>
          </div>
          {/* Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="art.png"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-1/3 md:top-1/3 left-1/7 text-white z-10 md:space-y-2">
            <h2 className="text-2xl md:text-6xl font-bold">Rajshahi Art Fair</h2>
            <p className="text-gray-300  text-md md:text-2xl">Healthy food delivered at your doorstep</p>
            <Link className='btn font-bold shadow-2xl bg-yellow-500 md:mt-3'>View More</Link>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="football.png"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-1/3 md:top-1/3 left-1/7 text-white z-10 md:space-y-2">
            <h2 className="text-2xl md:text-6xl font-bold">National Football Carnival</h2>
            <p className="text-gray-300  text-md md:text-2xl">Your satisfaction is our priority</p>
            <Link className='btn font-bold shadow-2xl bg-yellow-500 md:mt-3'>View More</Link>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="tec.png"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-1/3 md:top-1/3 left-1/7 text-white z-10 md:space-y-2">
            <h2 className="text-2xl md:text-6xl font-bold">Tech Summit 2025</h2>
            <p className="text-gray-300  text-md md:text-2xl">Special discounts available today</p>
            <Link className='btn font-bold shadow-2xl bg-yellow-500 md:mt-3'>View More</Link>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>

      </div>
    </div>

    
    </>
  )
}

export default Slider_com

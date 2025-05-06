import React from 'react'


const Slider_com = () => {
  return (
    <>
    <div className="w-full">
      <div className="carousel w-full ">
        
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="nightshow.png"
            className="w-full  object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Text */}
          <div className="absolute top-1/4 left-10 text-white z-10">
            <h2 className="text-4xl font-bold">Welcome to Our Site</h2>
            <p className="mt-2 text-lg">Enjoy the best deals and offers</p>
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
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-1/4 left-10 text-white z-10">
            <h2 className="text-4xl font-bold">Fresh & Organic</h2>
            <p className="mt-2 text-lg">Healthy food delivered at your doorstep</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-1/4 left-10 text-white z-10">
            <h2 className="text-4xl font-bold">Fast & Reliable</h2>
            <p className="mt-2 text-lg">Your satisfaction is our priority</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-1/4 left-10 text-white z-10">
            <h2 className="text-4xl font-bold">Order Now</h2>
            <p className="mt-2 text-lg">Special discounts available today</p>
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

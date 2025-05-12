import React, { use } from 'react'
import { Link } from 'react-router'

// Fetch data
const EventsData = fetch("/CartData.json").then(res => res.json())

const Events = () => {
  const CartAllData = use(EventsData)

  return (
    <div className="w-11/12 mx-auto py-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {CartAllData.map((cart) => (
          <div key={cart.id} className="card bg-transparent border border-yellow-400 rounded-2xl shadow-md w-full">
            <figure className="px-6 pt-6 relative">
              <img
                src={cart.thumbnail}
                alt={cart.name}
                className="rounded-xl w-full h-48 object-cover"
              />
              <div className="avatar avatar-placeholder absolute top-4 left-4">
                <div className="bg-yellow-500 text-white font-bold text-xs w-16 h-16 flex items-center justify-center rounded-full">
                  <span className='text-white'>{cart.date}</span>
                </div>
              </div>
            </figure>

            <div className="card-body items-center text-center">
            
            <div class="rating rating-xs">
              <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" aria-label="1 star" />
              <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" aria-label="2 star" checked="checked" />
              <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" aria-label="3 star" />
              <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" aria-label="4 star" />
              <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" aria-label="5 star" />
            </div>



              <h2 className="card-title text-lg md:text-xl text-white">{cart.name}</h2>
              <p className="text-sm  text-white"><span className='font-bold'>Location:</span> {cart.location}</p>
             <div className='flex justify-between items-center w-full gap-10'>
             <p className='font-bold text-white bg-amber-500 rounded-2xl p-1'>{cart.entry_fee}</p>
             <p className='font-bold text-white bg-amber-500 rounded-2xl p-1'>{cart.category}</p>
             </div>
              <div className="card-actions w-full mt-3">
                <Link
                  to={`/event/${cart.id}`}
                  className="w-full font-semibold text-white bg-yellow-500 py-2 rounded-md hover:bg-yellow-600 transition"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events

import React, { use } from 'react'
import { Link } from 'react-router';
const EventsData = fetch("/CartData.json").then(res => res.json());

const Events = () => {
    const CartAllData = use(EventsData);

  return (
    <div className='grid grid-cols-4 w-11/12 mx-auto'>
       
{
    CartAllData.map(cart => (
    <div class="card bg-base-100 w-96 shadow-sm mb-7">
    <figure class="px-10 pt-10 relative">
    <img
      src={cart.thumbnail}
      alt=""
      class="rounded-xl" />
      
      <div class="avatar avatar-placeholder absolute top-6 left-6">
        <div class="bg-yellow-500 font-bold text-sm w-16 rounded-full">
            <span >{cart.date}</span>
        </div>
      </div>
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{cart.name}</h2>
    <p>Location: {cart.location}</p>
    <div class="card-actions w-full ">
      <Link to={`/event/${cart.id}`} className='w-full font-bold bg-amber-400 py-3 rounded-lg'>click</Link>
    </div>
  </div>
</div>

    ))
}
    </div>
  )
}

export default Events
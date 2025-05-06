import React, { use } from 'react'
import { Link } from 'react-router';
const EventsData = fetch("/CartData.json").then(res => res.json());

const Events = () => {
    const CartAllData = use(EventsData);

  return (
    <div className='grid grid-cols-4 w-11/12 mx-auto'>
       
{
    CartAllData.map(cart => (
    <div class="card bg-base-100 w-96 shadow-sm">
    <figure class="px-10 pt-10">
    <img
      src={cart.thumbnail}
      alt=""
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{cart.name}</h2>
    <p>Location: {cart.location}</p>
    <div class="card-actions">
      <Link to={`/event/${cart.id}`}>click</Link>
    </div>
  </div>
</div>

    ))
}
    </div>
  )
}

export default Events
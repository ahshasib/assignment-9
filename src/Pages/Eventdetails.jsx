import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router';

const Eventdetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [event, setevent] = useState(null);

  useEffect(() => {
    if (data) {
      const foundEvent = data.find(item => item.id == id);
      setevent(foundEvent);
    }
  }, [data, id]);

  const showreserve = (e) => {
    e.preventDefault();
    alert("you are added");
  };

  return (
    <div className="min-h-screen flex items-center py-10 px-4 bg-black">
      {
        event ? (
          <div className="bg-white w-full max-w-6xl mx-auto p-6 md:p-10 rounded-2xl shadow-md">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Left Section: Image & Info */}
              <div className="w-full md:w-1/2">
                <img
                  className="w-full h-auto rounded-xl object-cover"
                  src={event.thumbnail}
                  alt=""
                />
                <div className="pt-4">
                  <h2 className="text-black font-bold text-2xl">{event.name}</h2>
                  <p className="text-gray-500">{event.location}</p>
                  <p className="py-3 text-black bg-yellow-500 p-5 rounded-lg mt-4">{event.details}</p>
                </div>
              </div>

              {/* Right Section: Form */}
              <div className="w-full md:w-1/2">
                <div className="card bg-base-100 w-full shadow-2xl">
                  <h2 className='text-4xl font-bold text-center text-white py-5 rounded-t-2xl bg-yellow-500'>Book and join</h2>
                  <form onSubmit={showreserve} className="card-body">
                    <fieldset className="fieldset">
                      <label className="label">Name</label>
                      <input name='name' type="text" className="input input-bordered w-full" placeholder="Name" required />

                      <label className="label">Email</label>
                      <input name='email' type="email" className="input input-bordered w-full" placeholder="Email" required />

                      <label className="label">Phone Number</label>
                      <input name='phone' type="text" className="input input-bordered w-full" placeholder="Phone Number" required />

                      <label className="label">City</label>
                      <input name='city' type="text" className="input input-bordered w-full" placeholder="City" required />

                      <label className="label">Coupon</label>
                      <input name='coupon' type="text" className="input input-bordered w-full" placeholder="Coupon (Optional)" />

                      <div className='flex justify-between items-center w-full'>
                      <p><label className="label mt-2 flex items-center gap-2">
                        <input type="checkbox" className="checkbox" required />
                        Everything is ok
                      </label></p>
                      <p className='text-xl text-yellow-500 font-bold pt-2'>Amount: {event.entry_fee}</p>
                      </div>

                      <button type='submit' className="btn bg-yellow-500 mt-4">Reserve Seat</button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">No Data is available</p>
        )
      }
    </div>
  );
};

export default Eventdetails;

import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router'


const Eventdetails = () => {
    const {id} = useParams()
    const data = useLoaderData();
    const [loader, setloader] = useState(true);
    const [event , setevent] = useState(null);

    useEffect(() => {
        if (data) {
          const foundEvent = data.find(item => item.id == id);
          setevent(foundEvent);
          
        }
      }, [data, id]);

      // if(loader){
      //   return <p className="text-white">লোড হচ্ছে...</p>;
      // }


      const showreserve = (e) =>{
        e.preventDefault();
        alert("you are added")
      }


  return (
    <div>

     
       {
        event ? (
          <>

            <div className='h-screen flex items-center'>
            <div className='flex gap-10 items-center h-fit bg-white w-[90%] mx-auto p-10 rounded-2xl '>
            <div>
            <img className='w-[50%] rounded-xl' src={event.thumbnail} alt="" />
           <div className='w-[50%]'>
           <h2 className='text-black font-bold text-2xl pt-4'>{event.name}</h2>
            <p className='text-gray-500'>{event.location}</p>
            <p className='py-3'>{event.details}</p>

           </div>
            </div>

            
      <div class="card bg-base-100 w-full mx-auto mt-16 max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={showreserve}  class="card-body">
        <fieldset class="fieldset">
        <label class="label">Name</label>
        <input name='email' type="text" class="input" placeholder="Nmae" required/>

          <label class="label">Email</label>
          <input name='email' type="email" class="input" placeholder="Email" required/>

          <label class="label">Phone Number</label>
          <input name='email' type="number" class="input" placeholder="Phone Number" required/>

          <label class="label">City</label>
          <input name='email' type="text" class="input" placeholder="City" required/>

          <label class="label">Coupon</label>
          <input name='password' type="text" class="input" placeholder="Password" required/>
          
        
          <button type='submit' class="btn btn-neutral mt-4">Submit</button>
         
        </fieldset>
      </form>
    </div>
              
            </div>
            
            </div>
          </>
        ) : (
          <p>ডেটা পাওয়া যায়নি</p>
        )
      }
    </div>
  )
}

export default Eventdetails
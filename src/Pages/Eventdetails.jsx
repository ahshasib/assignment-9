import React, { useEffect, useState } from 'react'
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
            <div className='flex gap-10 items-center w-full'>
            <div>
            <img className='w-[50%]' src={event.thumbnail} alt="" />
            <h2 className='text-white text-6xl'>{event.name}</h2>
            <p className='text-white'>{event.location}</p>

            </div>

            
      <div class="card bg-base-100 w-full mx-auto mt-16 max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={showreserve}  class="card-body">
        <fieldset class="fieldset">
          <label class="label">Email</label>
          <input name='email' type="email" class="input" placeholder="Email" />
          <label class="label">Password</label>
          <input name='password' type="password" class="input" placeholder="Password" />
          <div><a class="link link-hover">Forgot password?</a></div>
        
          <button type='submit' class="btn btn-neutral mt-4">Reserve Seat</button>
         
        </fieldset>
      </form>
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
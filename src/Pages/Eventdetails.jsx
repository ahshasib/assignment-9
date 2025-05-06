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
          setloader(false);
        }
      }, [data, id]);

      if(loader){
        return <p className="text-white">লোড হচ্ছে...</p>;
      }


  return (
    <div>
       {
        event ? (
          <>
            <h2 className='text-white text-6xl'>{event.name}</h2>
            <p>{event.location}</p>
          </>
        ) : (
          <p>ডেটা পাওয়া যায়নি</p>
        )
      }
    </div>
  )
}

export default Eventdetails
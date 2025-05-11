import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen flex items-center justify-center mt-5'>
      <div className='flex flex-col md:flex-row items-center gap-10 w-[90%] md:w-[80%] bg-white rounded-2xl shadow-xl p-5 md:p-10'>
        
        {/* Image Section */}
        <div className='w-[50%] md:w-[50%]'>
          <img
            className='rounded-2xl shadow-lg w-full h-auto'
            src="allimage.png"
            alt="About Us"
          />
        </div>

        {/* Text Section */}
        <div className='w-[50%] md:w-[50%] text-center md:text-left'>
          <h2 className='font-bold text-2xl md:text-3xl text-gray-800 mb-4'>
            Why We Are the Best
          </h2>
          <p className='text-gray-600 mb-3'>
            Welcome to <span className='font-bold text-sky-500'>MeetMatic</span> – Your Ultimate Local Event Discovery Platform!
          </p>

          <p className='text-gray-600 mb-2 font-semibold'>What We Offer:</p>
          <ul className='text-gray-600 list-disc pl-5 space-y-1 text-left'>
            <li>🔍 Discover Events by category: Tech, Art, Sports, Education, and more.</li>
            <li>📅 Stay Updated with details on dates, venues, and entry fees.</li>
            <li>👤 User Accounts: Save favorite events and get suggestions.</li>
            <li>📝 Share Ratings & Feedback on events you attend.</li>
            <li>🔐 Secure access and personalized features with login.</li>
          </ul>

          <p className='text-gray-600 mt-4'>
            Our platform is for both event organizers and attendees. We bridge communities with the events they love.
            <br /><br />
            Join us in celebrating local culture, knowledge, and creativity—one event at a time. Let’s make every moment memorable. Start exploring today!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

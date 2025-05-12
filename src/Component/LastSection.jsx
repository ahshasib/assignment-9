import React from 'react'

const LastSection = () => {
  return (
    <div>
      <div
        className="hero min-h-fit mt-15"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center py-10 px-5">
          <div className="w-full max-w-5xl">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
            <p className="text-white font-semibold py-5 w-full md:w-[80%] mx-auto text-sm md:text-base">
              MeetMatic is a modern event discovery platform designed to connect
              people with exciting local experiences. From tech conferences and
              workshops to concerts and art exhibitions, MeetMatic makes it
              easy to explore what’s happening around you. With a user-friendly
              interface, you can search events, save your favorites, and even
              leave reviews after attending. Let MeetMatic help you turn every
              moment into a memorable one!
            </p>

            {/* Stats section */}
            <div className="stats stats-vertical md:stats-horizontal shadow bg-yellow-50 mt-5 w-full">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-8 w-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Total Likes</div>
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-8 w-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Page Views</div>
                <div className="stat-value text-secondary">2.6M</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                        alt="User"
                      />
                    </div>
                  </div>
                </div>
                <div className="stat-value text-yellow-500">86%</div>
                <div className="stat-title">Satisfaction Rate</div>
                <div className="stat-desc text-secondary">
                  16% dissatisfaction rate
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button className="btn bg-yellow-500 text-white border-none hover:bg-yellow-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastSection

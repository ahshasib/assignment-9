import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import { Authcontext } from '../provider/Authprovider'
import { FaRegUserCircle } from "react-icons/fa";
import "../index.css"
const Navbar = () => {
  const {user, logout} = use(Authcontext)
 const handlelogout = () =>{
  logout().then(() => {
    alert("Sign-out successful")
  }).catch((error) => {
    console.log(error)
  });
 }

  return (
    <div className='bg-yellow-50 shadow-sm fixed top-0 left-0 z-50 w-full'>
        <div class="navbar w-11/12 mx-auto ">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>My Profile</a></li>
      </ul>
    </div>
    <Link to="/" class=" text-2xl font-bold">Meet<span className='text-sky-500'>Matic</span></Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 space-x-1">
      <li className='font-bold'><NavLink to="/">Home</NavLink></li>
      <li className='font-bold'><NavLink to="/about">About</NavLink></li>
      <li className='font-bold'><NavLink to="/auth/profile">My Profile</NavLink></li>
    </ul>
  </div>
  <div class="navbar-end space-x-3">
  {
    user && user.photoURL ? (
      <img className="w-12 rounded-full" src={user.photoURL} alt="User" title={user.displayName}/>
    ) : (
      <FaRegUserCircle className="text-3xl text-gray-500" />
    )
  }
    <p className='hidden md:inline text-bold text-sm px-2'>{user && user.email}</p>
    {
      user ? (
          <button className='btn btn-neutral' onClick={handlelogout}>Logout</button>
      ) : (
        <Link to="/auth/login" className='btn btn-neutral'>Login</Link>
      )

    }
   
    {/* <Link to="/auth/register" className='btn btn-neutral'>Register</Link> */}
  </div>
</div>
    </div>
  )
}

export default Navbar
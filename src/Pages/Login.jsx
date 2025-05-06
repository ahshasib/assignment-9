import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div>
      <div class="card bg-base-100 w-full mx-auto mt-16 max-w-sm shrink-0 shadow-2xl">
      <div class="card-body">
        <fieldset class="fieldset">
          <label class="label">Email</label>
          <input type="email" class="input" placeholder="Email" />
          <label class="label">Password</label>
          <input type="password" class="input" placeholder="Password" />
          <div><a class="link link-hover">Forgot password?</a></div>
        
          <button class="btn btn-neutral mt-4">Login</button>
          <p className='text-red-400'><Link to="/auth/register">register</Link></p>
        </fieldset>
      </div>
    </div>
    </div>
  )
}

export default Login
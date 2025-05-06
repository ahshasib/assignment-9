
import React from 'react'
import { Link } from 'react-router'

const Register = () => {
  return (
    <div>
      <div class="card bg-base-100 w-full mx-auto mt-16 max-w-sm shrink-0 shadow-2xl">
      <div class="card-body">
        <fieldset class="fieldset">
        <label class="label">Name</label>
        <input type="text" class="input" placeholder="Name" />

        <label class="label">Photo Url</label>
        <input type="text" class="input" placeholder="Photo Url" />

          <label class="label">Email</label>
          <input type="email" class="input" placeholder="Email" />

          <label class="label">Password</label>
          <input type="password" class="input" placeholder="Password" />

        
          <button class="btn btn-neutral mt-4">register</button>
          <p className='text-red-400'><Link to="/auth/login">login</Link></p>
        </fieldset>
      </div>
    </div>
    </div>
  )
}

export default Register
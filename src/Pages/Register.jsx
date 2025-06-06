
import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Authcontext } from '../provider/Authprovider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {

const {createUser, Setuser, updateuser} = use(Authcontext);
const [passError,setPassError] = useState("");
const [showPassword, setShowPassword] = useState(false);

const navigate = useNavigate();

  const handleRegester = (e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6){
      toast.error("Password length must be min 6 character");
      return
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must include at least one capital letter");
      return;
    }
  
    // Check small letter
    if (!/[a-z]/.test(password)) {
      toast.error("Password must include at least one small letter");
      return;
    }

    else{
      setPassError("")
    }
    
    createUser(email,password)
    .then((resault) => {
      // Signed up 
      const user = resault.user;
      updateuser({displayName:name, photoURL:photo});
      navigate("/")
      .then(() => {
        Setuser({...user,displayName:name, photoURL:photo});
      }).catch((error) => {
        console.log(error)
        Setuser(user)
      });
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
  }

  return (
    <div>
       <ToastContainer />
       <Helmet>
        <title>Register | Local Events</title>
      </Helmet>
      <div className='h-screen pt-10 '>
      <div class="card w-full mx-auto mt-16 max-w-sm shrink-0 shadow-2xl bg-transparent border border-yellow-500">
        <h2 className='text-white font-bold text-center py-5 bg-yellow-500 rounded-t-lg'>Please Register</h2>
      <form onSubmit={handleRegester} class="card-body">
        <fieldset class="fieldset">
        <label class="label text-white">Name</label>
        <input name='name' type="text" class="input" placeholder="Name" required/>

        <label class="label text-white">Photo Url</label>
        <input name='photo' type="text" class="input" placeholder="Photo Url" required/>

          <label class="label text-white">Email</label>
          <input name='email' type="email" class="input" placeholder="Email" required/>

          <div className=' relative'>
          <label class="label text-white">Password</label>
          <input name='password' type={showPassword ? "text" : "password"} class="input" placeholder="Password" required/>
          <span
            className="absolute right-6 top-8 cursor-pointer text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
            >
            {showPassword ? <FaEye />: <FaEyeSlash /> }
          </span>
          </div>
         {passError && <p className='text-red-400'>{passError}</p>}
        
          <button type='submit' class="btn bg-yellow-500 mt-4">register</button>
          <p className='font-bold text-base pt-4 text-white'><Link to="/auth/login">Already have an account. <span className='text-red-500 underline'>Login</span></Link></p>
        </fieldset>
      </form>
    </div>
    </div>
      </div>
  )
}

export default Register
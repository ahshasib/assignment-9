import React, { use, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { auth, Authcontext } from '../provider/Authprovider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';


const Login = () => {
const [error, setError] = useState("")
const {signIn }  = use (Authcontext);
const location = useLocation();
const navigate = useNavigate();
const googleProvider = new GoogleAuthProvider();
const emailref = useRef()

const handleGoogleLogin = () =>{
signInWithPopup(auth, googleProvider)
.then(result =>{
  const user = result.user;
  navigate(location.state ? location.state : "/");
})
.catch(error =>{
  console.log(error)
})
}

const handleLogin = (e) =>{
 e.preventDefault();
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
  setError("")
}



 signIn(email,password)
 .then((resault) => {
  const user = resault.user;
  navigate(`${location.state? location.state : "/"}`)
  
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;

  setError("You dont have any acount");
});
}

const handleforgetpass = () =>{
  const email = emailref.current.value;
  navigate("/auth/forgetpassword", { state: { email } });
 
  //  setError("")

  // sendPasswordResetEmail(auth, email)
  // .then(()=>{
  //   alert("you want to reset your password")
  // })
  // .catch(error=>{
  // setError(error.message)
  // })
}


  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>Login | Local Events</title>
      </Helmet>
    <div className='h-screen pt-10'>
    <div className="card bg-transparent border border-yellow-500  w-full mx-auto mt-16 max-w-sm shrink-0 shadow-2xl">
      <h2 className='text-white font-bold text-center py-5 bg-yellow-500 rounded-t-lg'>Please Login</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label text-white">Email</label>
          <input name='email' type="email" class="input" placeholder="Email" ref={emailref} required/>
          <label className="label text-white">Password</label>
          <input name='password' type="password" class="input" placeholder="Password" required/>
          <div onClick={handleforgetpass} className='pt-3 underline text-white '><a class="link link-hover text-md font-bold ">Forgot password?</a></div>
          {
            error && <p className='text-red-400'>{error}</p>
          }
        
          <button type='submit' className="btn bg-yellow-500 font-bold mt-4">Login</button>
          <hr className='my-4 text-gray-500'/>
          <button onClick={handleGoogleLogin} className='btn'><FcGoogle size={24} /> Continue with Google</button>
          <p className='font-bold pt-4 text-base text-white'><Link to="/auth/register">Don't have any account? <span className='text-red-500 underline'>Register</span></Link></p>
        </fieldset>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Login
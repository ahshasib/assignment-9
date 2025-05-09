import React, { use, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { auth, Authcontext } from '../provider/Authprovider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const Login = () => {
const [error, setError] = useState("")
const {signIn }  = use (Authcontext);
const location = useLocation();
const navigate = useNavigate();
const googleProvider = new GoogleAuthProvider

const handleGoogleLogin = () =>{
signInWithPopup(auth, googleProvider)
.then(result =>{

})
.cath(error =>{
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


  return (
    <div>
      <ToastContainer />
      <div class="card bg-base-100 w-full mx-auto mt-16 max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} class="card-body">
        <fieldset class="fieldset">
          <label class="label">Email</label>
          <input name='email' type="email" class="input" placeholder="Email" required/>
          <label class="label">Password</label>
          <input name='password' type="password" class="input" placeholder="Password" required/>
          <div><a class="link link-hover">Forgot password?</a></div>
          {
            error && <p className='text-red-400'>{error}</p>
          }
        
          <button type='submit' class="btn btn-neutral mt-4">Login</button>
          <hr className='my-4 text-gray-500'/>
          <button onClick={handleGoogleLogin} className='btn'><FcGoogle size={24} /> Continue with Google</button>
          <p className='text-red-400'><Link to="/auth/register">register</Link></p>
        </fieldset>
      </form>
    </div>
    </div>
  )
}

export default Login
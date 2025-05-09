import React, { use } from 'react'
import { Authcontext } from './Authprovider'
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const Privetroute = ({children}) => {
const {user,loading} = use(Authcontext);
const location = useLocation()

if(loading){
    return <Loading></Loading>
}

if(user && user?.email){
    return children
}

return <Navigate state={location.pathname} to="/auth/login"></Navigate>
  
}

export default Privetroute
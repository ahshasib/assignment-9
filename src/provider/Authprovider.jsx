import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
export const Authcontext = createContext();


export const auth = getAuth(app);

const Authprovider = ({children}) => {
    
const [user, Setuser] = useState(null);
const [loading, setloading] = useState(true)

const createUser = (email, password) =>{
    setloading(true)
return createUserWithEmailAndPassword(auth,email,password);
}

const signIn = (email, password) =>{
    setloading(true)
return signInWithEmailAndPassword(auth,email,password)
}

const updateuser = (updatedData)=>{
return updateProfile(auth.currentUser,updatedData)
}

const logout = () =>{
return signOut(auth)
}

useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
        Setuser(currentuser)
        setloading(false)
    })
    return ()=>{
        unsubscribe();
    }
})

const authdata = {
    user,
    Setuser,
    createUser,
    logout,
    signIn ,
    loading,
    setloading,
    updateuser
}

  return <Authcontext value={authdata}>{children}</Authcontext>
}

export default Authprovider

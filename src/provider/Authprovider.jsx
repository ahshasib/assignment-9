import React, { createContext, useState } from 'react'
export const Authcontext = createContext();

const Authprovider = ({children}) => {
const [user, Setuser] = useState({
    name: "hablu mia",
    email:"hablu@gmail.com"
});
const authdata = {
    user,
    Setuser
}

  return <Authcontext value={authdata}>{children}</Authcontext>
}

export default Authprovider
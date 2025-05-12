import { createBrowserRouter } from "react-router";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Homelayout from "../layout/Homelayout";
import Home from "../Pages/Home";
import Eventdetails from "../Pages/Eventdetails";
import Authlayout from "../layout/Authlayout";
import Privetroute from "../provider/Privetroute";

import ForgetPass from "../Pages/ForgetPass";
import About from "../Pages/About";
import My_profile from "../Pages/My_profile";
import Loading from "../Pages/Loading";
import Error from "../Pages/Error";


const router = createBrowserRouter(
    [
        {
            path:"/",
            Component: Homelayout,
            children:[
                {
                    path:"",
                    Component:Home
                },
                {
                    path:"/event/:id",
                    element: <Privetroute>
                                <Eventdetails></Eventdetails>
                            </Privetroute>,
                    loader:() => fetch("/CartData.json"),
                    // HydrateFallback:<Loading></Loading>

                },
                {
                    path:"/about",
                    Component:About
                },
                {
                    path:"/auth",
                    Component: Authlayout,
                    children:[
                        {
                            path:"/auth/login",
                            Component:Login
                        },
                        {
                            path:"/auth/register",
                            Component:Register
                        },
                        {
                            path:"/auth/forgetpassword",
                            Component:ForgetPass
                        },
                        {
                            path:"/auth/profile",
                            Component:My_profile
                        }
                        
                    ]
                },
               
            
            ]
        },
        
        {
            path:"/*",
            Component:Error
        },
        

    ]
);
export default router ;
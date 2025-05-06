import { createBrowserRouter } from "react-router";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Homelayout from "../layout/Homelayout";
import Home from "../Pages/Home";
import Eventdetails from "../Pages/Eventdetails";


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
                    Component:Eventdetails,
                    loader:() => fetch("/CartData.json")

                }
            ]
        },
        {
            path:"/auth",
            
            children:[
                {
                    path:"/auth/login",
                    Component:Login
                },
                {
                    path:"/auth/register",
                    Component:Register
                }
            ]
        },
        {
            path:"/*",
            element:<h1>this error</h1>
        }
    ]
);
export default router ;
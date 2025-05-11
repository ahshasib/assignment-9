import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/Router.jsx'
import Authprovider from './provider/Authprovider.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <Authprovider>
    <RouterProvider router = {router}></RouterProvider>
    </Authprovider>
    </HelmetProvider>
  </StrictMode>,
)

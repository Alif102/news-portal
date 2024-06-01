import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import router from './Routes/Routes';





ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
     <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
  </HelmetProvider>
 
)

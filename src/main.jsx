import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import MainLayout from './Layout/MainLayout'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Root/Root';
import DetailPage from './Pages/SecondHomePage/DetailPage';
import Sports from './Pages/Sportspage/Sports';
import { HelmetProvider } from 'react-helmet-async';
import Rajnity from './Pages/Rajnity/Rajnity';


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root/> ,
    


    children : [
      {
        path : '/',
        element : <MainLayout/>,
       
        

      },
      {
        path: '/স্পোর্টস',
        element: <Sports/>
      },
   
      {
        path: '/রাজনীতি',
        element: <Rajnity/>
      },
   
      {
        path : '/details/:id',
        element:  <DetailPage/>,
        loader : ()=>  fetch('https://admin.desh365.top/api/all-post')
        
      },
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
     <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
  </HelmetProvider>
 
)

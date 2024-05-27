import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import MainLayout from './Layout/MainLayout'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import SecondHomePage from './Pages/SecondHomePage/SecondHomePage';
import Root from './Root/Root';
import DetailPage from './Pages/SecondHomePage/DetailPage';
import Sports from './Pages/Sportspage/Sports';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/> ,
    // errorElement : <ErrorPage/>,

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
        path : '/details/:id',
        element:  <DetailPage/>,
        loader : ()=>  fetch('https://admin.desh365.top/api/all-post')
        
      },
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
)

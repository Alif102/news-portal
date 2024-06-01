import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import MainLayout from "../Layout/MainLayout";
import CommonPage from "../Component/CommonPage/CommonPage";
import DetailPage from "../Pages/SecondHomePage/DetailPage";
import ErrorPage from "../Pages/ErrorPage/Errorpage";



const router = createBrowserRouter([
  
    {
      path: "/",
      element: <Root/> ,
      errorElement:<ErrorPage></ErrorPage>,
      
  
  
      children : [
        {
          path : '/',
          element : <MainLayout/>,
         
          
  
        },
        
        {
          path : '/:id',
          element:  <CommonPage/>,
          
        },
     
        {
          path : '/details/:id',
          element:  <DetailPage/>,
         
          
        },
      ]
    }
    
  ])

export default router;
import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
// import Footer from "../Layout/Footer/Footer"

// import Naavbar from "../Layout/Navbar/Naavbar"

const Root = () => {
  return (
    <div>
      <Toaster/>

     <div className="container mx-auto">
     {/* <Navbar/> */}
     {/* <Navbar/> */}
     {/* <Naavbar/> */}
    

     </div>
       
        <Outlet></Outlet>

        <div className="container mx-auto">
     {/* <Footer/> */}

     </div>
        
    </div>
  )
}

export default Root
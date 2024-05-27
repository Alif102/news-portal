import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Footer from "../Layout/Footer/Footer"
// import Navbar from "../Pages/Home/RightSide/Navbar"
import Naavbar from "../Layout/Navbar/Naavbar"
// import Navbar from "../Layout/Navbar/Navbar"

const Root = () => {
  return (
    <div>
      <Toaster/>

     <div className="container mx-auto">
     {/* <Navbar/> */}
     {/* <Navbar/> */}
     <Naavbar/>
    

     </div>
       
        <Outlet></Outlet>

        <div className="container mx-auto">
     <Footer/>

     </div>
        
    </div>
  )
}

export default Root
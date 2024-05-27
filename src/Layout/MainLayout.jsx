
import Binodon from "../Component/Binodon/Binodon"
import Card from "../Component/Card/Card"

// import Sports from "../Component/Sports/Sports"
import Sport from "../Component/Sports/Sport"
import Home from "../Pages/Home/Home"


const MainLayout = () => {
  return (
    <div>
       
        <div className='container mx-auto'>
          
         
          <Home/>
          
          <Card/>

          <Binodon/>

          {/* <Sports/> */}

          <Sport/>

          
       

        </div>
    </div>
  )
}

export default MainLayout


import Binodon from "../Component/Binodon/Binodon"
import Card from "../Component/Card/Card"


// import Sports from "../Component/Sports/Sports"
import Sport from "../Component/Sports/Sport"
import Home from "../Pages/Home/Home"
import National from "../Pages/Home/RightSide/National"


const MainLayout = () => {
  return (
    <div>
       
        <div className='container mx-auto'>
          
         
          <Home/>
          <National/>
          <Card/>
          

          <Binodon/>

          {/* <Sports/> */}

          <Sport/>

      

          
       

        </div>
    </div>
  )
}

export default MainLayout

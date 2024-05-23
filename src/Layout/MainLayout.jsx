
import Binodon from "../Component/Binodon/Binodon"
import Card from "../Component/Card/Card"
import Sports from "../Component/Sports/Sports"
import Home from "../Pages/Home/Home"


const MainLayout = () => {
  return (
    <div>
       
        <div className='container mx-auto'>
          
         
          <Home/>
          
          <Card/>

          <Binodon/>

          <Sports/>

          
       

        </div>
    </div>
  )
}

export default MainLayout


import LeftSide from './LeftSide'
import Add from './RightSide/Add'
import RightThird from './RightSide/RightThird'
import NewsTabs from './RightSide/NewsTabs'
import { useEffect, useState } from 'react'
import axios from 'axios'
import National from './RightSide/National'
import BreakingNewsSlider from '../BreakingNews/BreakingNewsSlider'
import { Helmet } from 'react-helmet-async'
import Loader from '../../Component/Loader/Loader'

const Home = () => {

  // Fetch Data
   // Fetch Data
   const [allposts, setPosts] = useState([]);
   // console.log(posts)
   
 
 
 
   useEffect(() => {
     const fetchPosts = async () => {
       try {
         const response = await axios.get('https://admin.desh365.top/api/all-post');
         setPosts(response.data.data);
       } catch (error) {
         console.error('Error fetching the posts:', error);
       }
     };
 
     fetchPosts();
   }, []);
 







  return (
    <div>
      <Helmet>
        <title>News Portal Home Page</title>
      </Helmet>
      <div className='grid md:grid-cols-12 md:mx-10 ml-4 gap-6 lg:grid-cols-12 grid-cols-1'>


        <div className='col-span-2 order-last md:order-first lg:block lg:order-first gap-3 '>

          <LeftSide />

        </div>


        <div className='md:col-span-10    '>

        
          <div className='grid md:grid-cols-8 lg:grid-cols-8 grid-cols-1 gap-5 '>

            <div className='md:col-span-5  col-span-1'>
              <div>
              <BreakingNewsSlider/>
               
              </div>

            </div>
            <div className='md:col-span-3  col-span-1 px-2 h-[404px] w-[100%] mt-4 shadow-lg'>


              <RightThird allposts={allposts} />

            </div>


          </div>


          <Add />
          <div className='grid  md:grid-cols-8 grid-cols-1 pt-4 space-y-2 pb-5'>
           
            <National/>


            <div className='md:col-span-3 grid-cols-1'>
              <NewsTabs />



            </div>


          </div>



          <div>

          </div>
        </div>



      </div>

    </div>
  )
}

export default Home

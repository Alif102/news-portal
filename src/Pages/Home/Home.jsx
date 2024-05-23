
import LeftSide from './LeftSide'
import Add from './RightSide/Add'

import NewsDiv2 from './RightSide/NewsDiv2'
import RightThird from './RightSide/RightThird'

import NewsTabs from './RightSide/NewsTabs'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

  // Fetch Data
   // Fetch Data
   const [allposts, setPosts] = useState([]);
   // console.log(posts)
   
 
 
 
   useEffect(() => {
     const fetchPosts = async () => {
       try {
         const response = await axios.get('http://desh365.top/api/all-post');
         setPosts(response.data.data);
       } catch (error) {
         console.error('Error fetching the posts:', error);
       }
     };
 
     fetchPosts();
   }, []);
 
  console.log(allposts)


//   const [postsid, setPostsid] = useState([]);
// useEffect(() => {
//     const fetchPosts = async () => {
//         try {
//             const response = await axios.get('https://desh365.top/api/all-post');
//             // Extracting only IDs from the response data
//             const postIds = response.data.map(post => post.id);
//             setPostsid(postIds);
//         } catch (error) {
//             console.error('Error fetching the posts:', error);
//         }
//     };

//     fetchPosts();
// }, []);
// console.log(postsid)





  return (
    <div>
      <div className='grid md:grid-cols-12 md:mx-10 ml-4 gap-6 lg:grid-cols-12 grid-cols-1'>


        <div className='col-span-2 order-last md:order-first lg:block lg:order-first gap-3 '>

          <LeftSide />

        </div>


        <div className='md:col-span-10    '>

        
          <div className='grid md:grid-cols-8 lg:grid-cols-8 grid-cols-1 gap-5 '>

            <div className='md:col-span-5  col-span-1'>
              <div>
                <div className='w-[100%] mx-auto h-[250px] mt-5 bg-[#D9D9D9]'>

                </div>
                <h1 className="box-text1 md:block sm:text-center md:text-start text-sm md:text-xl lg:text-2xl mt-3">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
              </div>

            </div>
            <div className='md:col-span-3  col-span-1 px-2 h-[404px] w-[100%] mt-4 shadow-lg'>


              <RightThird allposts={allposts} />

            </div>


          </div>

          <Add />
          <div className='grid  md:grid-cols-8 grid-cols-1 pt-4 space-y-2 pb-5'>
            <div className='md:col-span-5 grid-cols-1 gap-3'>
              <h1 className='font-bold text-3xl'>জাতীয়</h1>
              <div className=' border-black py-3 border-b-4'></div>
              <div className='flex flex-1 gap-3 mt-4'>

                <div>
                  <div className='w-[100%] mb-3 h-[130px] bg-[#D9D9D9]'></div>
                  <div className=' space-y-4' >
                    <h1 className=' text-xl font-bold'>দেশের ১৪ অঞ্চলে ৬০ কিমি.   বেগে ঝড়ো বৃষ্টির আভাস</h1>
                    <p className='text-[12px]'>দেশের ১৪ জেলার উপর দিয়ে সর্বোচ্চ ৬০ কিলোমিটার বেগে ঝড়ো হাওয়া বয়ে যাওয়ার পূর্বাভাস দিয়েছে <br /> আবহাওয়া অধিদপ্তর। মঙ্গলবার (১৯ মার্চ) ...</p>
                    <p className='text-[12px]'>দেশের ১৪ জেলার উপর দিয়ে সর্বোচ্চ ৬০ কিলোমিটার <br /> বেগে ঝড়ো হাওয়া বয়ে যাওয়ার পূর্বাভাস দিয়েছে <br /> আবহাওয়া অধিদপ্তর। মঙ্গলবার (১৯ মার্চ) ...</p>
                  </div>
                </div>


                <div className='w-[100%] hidden md:block mb-3 h-[95px] '>
                  <NewsDiv2 />

                </div>
              </div>


            </div>


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

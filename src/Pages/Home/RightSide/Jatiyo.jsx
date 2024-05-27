import React, { useEffect, useState } from 'react'
import NewsDiv2 from './NewsDiv2'
import Jatiyo from '../../../Component/Jatiyo/Jatiyo'
const Jatiyoo = () => {


  const [posts, setPosts] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://admin.desh365.top/api/all-post');
            console.log('Response data:', response.data.data); 
           
            const filteredPosts = response.data.data.filter(post => post.category_name === "জাতীয়");
            setPosts(filteredPosts);
            // setPosts(response.data.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
console.log(posts)
    console.log(posts[0])



  return (
    <div className='md:col-span-5 grid-cols-1 gap-3'>
              {/* <h1 className='font-bold text-3xl'>জাতীয়</h1> */}
            

              <Jatiyo/>
              {/* <div className=' border-black py-3 border-b-4'></div>
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
              </div> */}


            </div>
  )
}

export default Jatiyoo

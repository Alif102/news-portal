import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostBody from '../../Component/PostBody';
const Rajnity = () => {

    const [rajnity, setRajnity] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://admin.desh365.top/api/all-post');
          console.log('Response data:', response.data.data);
  
          const filteredrajnity = response.data.data.filter(post => post.category_name === "রাজনীতি");
          setRajnity(filteredrajnity);
          // setPosts(response.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    console.log(rajnity)
  return (
    <div className='grid mt-4 grid-cols-10 gap-3 mx-auto container'>
      <div className='flex gap-2 col-span-8'>
     
     {rajnity.length > 0 && (
       <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-[95%] mx-auto">
       <img src={`https://admin.desh365.top/public/storage/post-image/${rajnity[1].image}`} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/>
       <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
       <h3 class="z-10 mt-3 text-xl font-bold text-white"> {rajnity[1].title}</h3>
       {/* <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div> */}
   </article>
     )}

{rajnity.length > 1 && (
       <div class="w-[400px] space-y-1">
       <img src={`https://admin.desh365.top/public/storage/post-image/${rajnity[0].image}`} alt="University of Southern California" className='w-80 h-52'/>
       <h3 class="font-bold"> {rajnity[0].title}</h3>
       <p className='text-gray-700'>
           <PostBody  postBody={rajnity[1].post_body}/>
       </p>
       {/* <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div> */}
   </div>
     )}
     </div>

      <div className='col-span-2 bg-gray-200'>
        RightSide

      </div>
    </div>
  )
}

export default Rajnity

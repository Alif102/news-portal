import React, { useEffect, useState } from 'react'
import v1 from '../assets/Images/v1.jpg'
import v2 from '../assets/Images/v2.jpg'
import v6 from '../assets/Images/v6.jpg'
import v3 from '../assets/Images/v3.jpg'
import { useParams } from 'react-router-dom'
const NewsCard = ({related}) => {


  console.log(related)
 
   
   
 
 


 

  // console.log(postData);

  if (!related) {
    return <div>Loading...</div>; // Or any fallback content
  }

  const imageUrl = `http://admin.desh365.top/public/storage/post-image/${related?.image}`;
  return (
<div className='mt-5 mb-5'>
    <div className=' px-1 py-3 '>
        <h1 className='text-2xl font-bold'>এ বিভাগের সর্বোচ্চ পঠিত</h1>
        {/* <h1>{related.length}</h1> */}
       
        </div>
    <div>
      <div>
      {/* {related.map(category => (
        
                    // <li key={category.id}>
                    //      {category.name}
                         
                    // </li>
                    <div 
                      key={category.id}>
                   
                        <a className="hover:text-purple-500" href="#" >{category.title}</a>
                        <img src={imageUrl} alt='image'></img>



                        </div>
                ))} */}



<div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8'>
{related.map(post => {
        const imageUrl = `http://desh365.top/public/storage/post-image/${post.image}`;
        
        return (
       
         <div className='overflow-auto h-300px'>
          
           <div className='flex gap-2 flex-col my-3' key={post?.id}>
             <div className=''>
            
                        <img className='transition duration-300 ease-in-out hover:scale-110 w-[280px] ' src={imageUrl} alt={post.title} /> 
</div>
            <h2 className='text-[10px] font-bold justify-center items-center'>{post.title}</h2>
           
          </div>
          <hr/>
         </div>
         
         
        );
      })} </div>
      </div>
      <div class="bg-white py-1 ">
  <div class="">
    
   
   

    {/* <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8">
   
      <div  class="flex flex-col overflow-hidden rounded-lg border bg-white">
        <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src={v1} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-1 flex-col p-4 sm:p-6">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">ক্রিকেট ছাড়লে অনেক দিনের জন্য আড়ালে চলে যাবেন কোহলি</a>
          </h2>

          <p class="mb-8 text-gray-500">চলতি আইপিএল মৌসুমেও ব্যাট হাতে কোহলি অনেক সমালোচককে চুপ করিয়ে দিয়েছেন। এবারের আইপিএলে ১৩ ইনিংস ব্যাটিং করে রান করেছেন ৬৬১—গড় ৬৬.১০।</p>

          <div class="mt-auto flex items-end justify-between">
            <div class="flex items-center gap-2">
              <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" class="h-full w-full object-cover object-center" />
              </div>

              <div>
                <span class="block text-indigo-500">Mike Lane</span>
                <span class="block text-sm text-gray-400">Jan 19, 2024</span>
              </div>
            </div>

            <span class="rounded border px-2 cursor-pointer py-1 text-sm text-gray-500">Article</span>
          </div>
        </div>
      </div>
      
     
      
      
    </div> */}
    </div>
  </div>
</div>
    </div>
  )
}

export default NewsCard

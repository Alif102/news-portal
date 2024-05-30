import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostBody from '../../Component/PostBody';
import Add from '../Home/RightSide/Add';
import { Link } from 'react-router-dom';
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

    const slicedArray = rajnity.slice(3, 6);
    console.log(slicedArray)
  return (


    <dv className='w-[92%] mx-auto'>
       <Add/>
   
    <div className='grid mt-4 md:grid-cols-12  grid-cols-1 gap-3 mx-auto container'>
     
      <div className=' col-span-9'>
     <div className='flex flex-col md:flex-row gap-6'>

    
     <div>
     {rajnity.length > 0 && (
       <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 w-full h-full pt-40 mx-auto">
       <img src={`https://admin.desh365.top/public/storage/post-image/${rajnity[0].image}`} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/>
       <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
       <h3 class="z-10 mt-3 text-xl font-bold text-white"> {rajnity[0].title}</h3>
       {/* <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div> */}
   </article>
     )}
     </div>
     <div className='shadow-lg px-3 '>
     {rajnity.length > 1 && (
       <div class="md:w-[300px] w-full">
       <img src={`https://admin.desh365.top/public/storage/post-image/${rajnity[1].image}`} alt="University of Southern California" className='w-full h-52'/>
       <h3 class="font-bold mt-3"> {rajnity[1].title}</h3>
       <p className='text-gray-700 pb-3'>
           <PostBody  postBody={rajnity[1].post_body}/>
       </p>
       {/* <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div> */}
   </div>
     )}
     </div>
      </div>

      <div className=' border-black w-[100%] mx-auto my-6 border-b-2'></div>

      <div>
    


<div className='flex flex-col md:flex-row gap-3'>
            {slicedArray.map(post => {
              const imageUrl = `https://admin.desh365.top/public/storage/post-image/${post.image}`;

              return (

                <div className='overflow-auto '>

                <Link to={`/details/${post?.id}`}>
                <div className='flex gap-2 flex-col my-3' key={post?.id}>
                    <div className=''>

                      <img className='transition duration-300 ease-in-out hover:scale-90 ' src={imageUrl} alt={post.title} />
                    </div>
                    <h2 className='text-[16px] font-bold justify-center items-center'>{post.title}</h2>
                    <PostBody  postBody={post.post_body}/>
                  </div>
                  </Link>
                  <hr />
                 
                </div>


              );
            })} </div>
            <div className=' border-black w-[100%] mx-auto my-6 border-b-2'></div>

            <Add/>

        


            <div>

            </div>



      </div>






      

     </div>
     
     <div className='col-span-3 bg-gray-200'>
        RightSide

      </div>

     
     </div>


    

    
   

      
    </div>
   
  )
}

export default Rajnity

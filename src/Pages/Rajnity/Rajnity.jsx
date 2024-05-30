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


    <div className='w-[92%] mx-auto'>
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
     <div className='shadow-lg p-3'>
     {rajnity.length > 1 && (
       <div class="md:w-[300px] w-full space-y-1">
       <img src={`https://admin.desh365.top/public/storage/post-image/${rajnity[1].image}`} alt="University of Southern California" className='w-full h-52'/>
       <h3 class="font-bold"> {rajnity[1].title}</h3>
       <p className='text-gray-700'>
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

<section className="text-gray-600 body-font mx-12">
   <div className="container px-5 py-24 mx-auto flex flex-wrap">
     <div className="flex flex-wrap w-full">
       <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
         <div className="flex relative pb-12">
           <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
             <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
           </div>
           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
             </svg>
           </div>
           <div className="flex-grow pl-4">
             <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">Feasibility analysis</h2>
             <p className="leading-relaxed">The feasibility study can show how to make your own software profitable in the long run, evaluates all factors including economic and technical that affect the project development.</p>
           </div>
         </div>
         <div className="flex relative pb-12">
           <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
             <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
           </div>
           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
               <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
             </svg>
           </div>
           <div className="flex-grow pl-4">
             <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">Designing & Modelling</h2>
             <p className="leading-relaxed">
               Designers, like any other architects, build the whole structure of the project, and provide the final prototype that will be used for the next steps of software development.
             </p>
           </div>
         </div>
         <div className="flex relative pb-12">
           <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
             <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
           </div>
           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
               <circle cx="12" cy="5" r="3"></circle>
               <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
             </svg>
           </div>
           <div className="flex-grow pl-4">
             <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">Construction</h2>
             <p className="leading-relaxed">
               Here is coding where developers are getting started. Every programmer has his own software development tasks list for coding for which he is responsible. The software build process is controlled by project managers. This phase is the most time-consuming operation. 
             </p>
           </div>
         </div>
         <div className="flex relative pb-12">
           <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
             <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
           </div>
           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
               <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
               <circle cx="12" cy="7" r="4"></circle>
             </svg>
           </div>
           <div className="flex-grow pl-4">
             <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">Quality Assurance</h2>
             <p className="leading-relaxed">
               QA engineers test the quality of the code written by developers. They use different frameworks and kinds of testing to learn if there are any bugs in the system. Testers write test cases and report the bugs to developers to fix them, also helping to figure out how to build a software product most efficiently.
             </p>
           </div>
         </div>
         <div className="flex relative">
           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
               <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
               <path d="M22 4L12 14.01l-3-3"></path>
             </svg>
           </div>
           <div className="flex-grow pl-4">
             <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">Deployment & Release</h2>
             <p className="leading-relaxed">
               The first software release will be followed by the releases of the next versions of the product. It is the final stage of development that can be also followed by maintenance and support.
             </p>
           </div>
         </div>
       </div>
       <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://source.unsplash.com/featured?team" alt="step"/>
     </div>
   </div>
 </section>
</div>


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

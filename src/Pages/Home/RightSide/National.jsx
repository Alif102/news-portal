// import Jatiyo from '../../../Component/Jatiyo/Jatiyo'
// const National = () => {







//   return (
//     <div className=''>
//               <h1 className='font-bold text-2xl'>জাতীয়</h1>
//               <div className=' border-black py-3 border-b-4'></div>

//               <Jatiyo/>
             


//             </div>
//   )
// }

// export default National


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import NewsDiv from '../NewsDiv';

const National = () => {

  const [posts, setPosts] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://admin.desh365.top/api/all-post');
        // console.log('Response data:', response.data.data);

        const filteredPosts = response.data.data.filter(post => post.category_name === "জাতীয়");
        setPosts(filteredPosts);
        // setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // console.log(posts)
  //  const slicedPostBody = posts[0].post_body.slice(0, 50);

  return (
    <div>
      <p className='font-bold text-xl py-4 md:ml-10 ml-3'>জাতীয়</p>

      <div className='grid md:grid-cols-12 md:mx-10 mx-2 mb-14 gap-4 lg:grid-cols-12 grid-cols-1'>


        <div className='col-span-4'>
          {/* <div className='w-[95%] h-[200px] mb-3 bg-[#D9D9D9]'></div> */}

          {posts.length > 0 && (
            <div key={posts[0].id} className=''>
              <img className='w-[100%] h-full mb-3' src={`https://admin.desh365.top/public/storage/post-image/${posts[0].image}`} alt={posts[0].title} />
              <h1 className='text-xl font-bold'>
                {posts[0].title}
              </h1>
            </div>
          )}
        </div>


        <div className='col-span-4'>
          <div>

            <div className=' flex flex-col  gap-3 '>
              {posts.map(post => {
                const imageUrl = `https://admin.desh365.top/public/storage/post-image/${post.image}`;

                return (
                  <Link to={`/details/${post?.id}`}   key={post?.id}>
                    <div className='flex gap-2' key={post?.id}>
                      <img className='w-24 h-24' src={imageUrl} alt={post.title} />

                      <h2>{post.title}</h2>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className='col-span-4'>
          {/* <div className="flex items-center justify-center w-[100%] h-[350px]  font-bold bg-[#D9D9D9]">ADD</div> */}
       
       <NewsDiv/>
        </div>









      </div>
      {/* <div className=' border-black w-[94%] mx-auto my-6 border-b-2'></div> */}

    </div>
  )
}

export default National


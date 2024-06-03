import React, { useEffect, useState } from 'react'
// import NewsDiv2 from '../../Pages/Home/RightSide/NewsDiv2'
import axios from 'axios';
import { Link } from 'react-router-dom';
import PostBody from '../PostBody';
// import PostBody from '../../Component/PostBody';

const Jatiyo = () => {

  const [posts, setPosts] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://admin.desh365.top/api/all-post');

        const filteredPosts = response.data.data.filter(post => post.category_name === "জাতীয়");
        setPosts(filteredPosts);
        // setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //  const slicedPostBody = posts[0].post_body.slice(0, 50);

  return (
    <div>


      <div className='flex gap-3 md:flex-row flex-col mt-4'>


        <div className=''>
          {/* <div className='w-[95%] h-[200px] mb-3 bg-[#D9D9D9]'></div> */}
          {posts.length > 0 && (
            <Link to={`/details/${posts?.id}`} key={posts[0].id} className='space-y-4'>
              <img className='w-[100%]  mb-3' src={`https://admin.desh365.top/public/storage/post-image/${posts[0].image}`} alt={posts[0].title} />
              <h1 className=' text-md font-bold'>
                {posts[0].title}
              </h1>
              {/*             
                <div >
                <PostBody className='text-[10px]' postBody={posts[0].post_body} />
                </div> */}

            </Link>
          )}


        </div>


     
          <div>

            <div className=' flex flex-col gap-3 '>
              {posts.map(post => {
                const imageUrl = `https://admin.desh365.top/public/storage/post-image/${post.image}`;

                return (
                  <Link to={`/details/${post?.id}`} key={post.id}>
                    <div className='flex  gap-2' key={post?.id}>
                      <img className='w-20 rounded-md' src={imageUrl} alt={post.title} />

                      <h2 className='text-sm'>{post.title}</h2>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    


  )
}

export default Jatiyo

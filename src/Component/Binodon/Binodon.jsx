import React, { useEffect, useState } from 'react'
import NewsDiv2 from '../../Pages/Home/RightSide/NewsDiv2'
import axios from 'axios';
import { Link } from 'react-router-dom';
import PostBody from '../../Component/PostBody';

const Binodon = () => {

  const [posts, setPosts] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://admin.desh365.top/api/all-post');
        console.log('Response data:', response.data.data);

        const filteredPosts = response.data.data.filter(post => post.category_name === "বাণিজ্য");
        setPosts(filteredPosts);
        // setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(posts)
  //  const slicedPostBody = posts[0].post_body.slice(0, 50);

  return (
    <div>
      <p className='font-bold text-xl m-6 ml-10'>বাণিজ্য</p>

      <div className='grid md:grid-cols-12 md:mx-10 mx-2 gap-6 lg:grid-cols-12 grid-cols-1'>


        <div className='col-span-4'>
          {/* <div className='w-[95%] h-[200px] mb-3 bg-[#D9D9D9]'></div> */}

          {posts.length > 0 && (
            <div className='space-y-4'>
              <img className='w-[95%] h-full mb-3' src={`https://admin.desh365.top/public/storage/post-image/${posts[0].image}`} alt={posts[0].title} />
              <h1 className='text-xl font-bold'>
                {posts[0].title}
              </h1>
            </div>
          )}




        </div>


        <div className='col-span-4'>
          <div>

            <div className=' flex flex-col space-y-4 gap-3 py-4'>
              {posts.map(post => {
                const imageUrl = `https://admin.desh365.top/public/storage/post-image/${post.image}`;

                return (
                  <Link to={`/details/${post?.id}`}>
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
          <div className="flex items-center justify-center w-[90%] h-[350px]  font-bold bg-[#D9D9D9]">ADD</div>
        </div>









      </div>
      <div className=' border-black w-[94%] mx-auto my-6 border-b-2'></div>

    </div>
  )
}

export default Binodon

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RightThird = ({allposts}) => {
 
  // Fetch Data
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://admin.desh365.top/api/all-post');
        setPosts(response.data.data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching the posts:', error);
      }
    };

    fetchPosts();
  }, []);
  return (

<div className=' w-[100%] h-[410px] py-4 shadow-lg overflow-x-scroll '>

<div className=' flex  flex-col space-y-4 gap-3 py-4'>
{posts.map(post => {
        const imageUrl = `https://admin.desh365.top/public/storage/post-image/${post.image}`;
        
        return (
         <Link to={`/details/${post?.id}`} key={post?.id}>
          <div className='flex gap-2 justify-center  items-center hover:underline' key={post?.id}>
                        <img className='w-20' src={imageUrl} alt={post.title} />

            <h2 className='text-[14px]'>{post.title}</h2>
          </div>
          <div className='border borber-b'></div>
          </Link>
        );
      })}
    </div>
</div>


  )
}

export default RightThird

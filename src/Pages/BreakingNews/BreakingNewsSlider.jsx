import React, { useEffect, useState } from 'react'
import { Carousel } from "@material-tailwind/react";
import axios from 'axios';
import { Link } from 'react-router-dom';
const BreakingNewsSlider = () => {


    const [posts, setPosts] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://admin.desh365.top/api/all-post');
        // console.log('Response data:', response.data.data);

        const filteredPosts = response.data.data.filter(post => post.category_name === "ব্রেকিং নিউজ");
        setPosts(filteredPosts);
        // setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // console.log(posts)
  return (
    <div>
          <Carousel transition={{ duration: 1 }} className="rounded-xl">

          {posts.map(post => {
                const imageUrl = `https://admin.desh365.top/public/storage/post-image/${post.image}`;

                return (
                  <Link to={`/details/${post?.id}`} key={post?.id}>
                    <div className='' key={post?.id}>
                

                      <div className="relative max-w-xl mx-auto mt-20">
    <img className="w-full h-[350px] object-cover rounded-md" src={imageUrl} alt={post.title}/>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40  rounded-md"></div>
    <div className="absolute inset-20 flex items-center mt-40 justify-center">
        <h2 className="text-white text-xl font-bold">{post.title}</h2>
    </div>
</div>
           
                     
                    </div>
                  </Link>
                );
              })}
     
     
    </Carousel>
      
    </div>
  )
}

export default BreakingNewsSlider
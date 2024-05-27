import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import car2 from '../../../assets/Images/car2.jpg'
// import car3 from '../../../assets/Images/car3.jpg'
// import car4 from '../../../assets/Images/car4.jpg'
// import car5 from '../../../assets/Images/car6.jpg'
// import { Link } from 'react-router-dom'
const RightThird = ({allposts}) => {
  console.log(allposts.id)


  // Fetch Data
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://admin.desh365.top/api/all-post');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching the posts:', error);
      }
    };

    fetchPosts();
  }, []);


 



  return (
    <div>


<div className='shadow-xl w-[100%] mt-4 h-[390px] overflow-x-scroll '>

<div className=' flex  flex-col space-y-4 gap-3 py-4'>
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
  )
}

export default RightThird

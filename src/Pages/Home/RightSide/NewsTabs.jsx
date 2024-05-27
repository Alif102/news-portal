import { useEffect, useState } from 'react';
import NewsTabScroll from './NewsTabScroll';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewsTabs = () => {

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




  const [activeTab, setActiveTab] = useState(2);
 

  return (
    <div className="shadow-xl w-[100%] mt-4 h-[490px]">
      <div className="flex ">
        <button
          className={`px-3 py-2 ${
            activeTab === 1 ? 'shadow-lg text-black' : 'shadow-xl'
          }`}
          onClick={() => setActiveTab(1)}
        >
          সর্বশেষ
        </button>
        <button
          className={`px-3 py-2 ${
            activeTab === 2 ? 'shadow-lg text-black' : 'shadow-xl'
          }`}
          onClick={() => setActiveTab(2)}
        >
          সর্বোচ্চ পঠিত
        </button>
      </div>
      <div
        className="mt-4 h-96 overflow-y-scroll"
        // style={{ background: activeTab === 1 ? '#BDBDBD' : '#D9D9D9' }}
      >
        {activeTab === 1 && (
          <div className="p-4">
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
        )}
        {activeTab === 2 && (
          <div className="p-4">
            <div className=' flex flex-col space-y-4 gap-3 py-4'>
{posts.slice().reverse().map(post => {
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
        )}
      </div>
      <div className='shadow-lg w-full mt-4 h-8'>
<h1 className=' text-center p-1 font-bold'>আজকের সব খবর</h1>
      </div>
  
      


      
    </div>
  );
};

export default NewsTabs;

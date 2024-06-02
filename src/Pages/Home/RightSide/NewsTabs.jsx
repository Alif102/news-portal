import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewsTabs = () => {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

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

  const renderPosts = (postList) => (
    <div className='flex flex-col space-y-4 gap-3 py-4'>
      {postList.map((post) => (
        <Link to={`/details/${post?.id}`} key={post?.id} className='flex gap-2'>
          <img className='w-24 h-24' src={`https://admin.desh365.top/public/storage/post-image/${post.image}`} alt={post.title} />
          <h2>{post.title}</h2>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="shadow-xl w-full mt-4 h-[490px]">
      <div className="flex justify-evenly">
        <button
          className={`px-3 py-2 ${activeTab === 1 ? 'shadow-lg border border-black bg-gray-200 text-black' : 'shadow-xl bg-gray-200'}`}
          onClick={() => setActiveTab(1)}
        >
          সর্বশেষ
        </button>
        <button
          className={`px-3 py-2 ${activeTab === 2 ? 'shadow-lg border border-black bg-gray-200 text-black' : 'shadow-xl bg-gray-200'}`}
          onClick={() => setActiveTab(2)}
        >
          সর্বোচ্চ পঠিত
        </button>
      </div>
      <div className="mt-4 h-96 overflow-y-scroll">
        <div className="p-4">{activeTab === 1 ? renderPosts(posts) : renderPosts(posts.slice().reverse())}</div>
      </div>
      <div className='shadow-lg w-full mt-4 h-8'>
        <h1 className='text-center p-1 font-bold'>আজকের সব খবর</h1>
      </div>
    </div>
  );
};

export default NewsTabs;

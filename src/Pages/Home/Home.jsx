import { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import LeftSide from './LeftSide';
import Add from './RightSide/Add';
import RightThird from './RightSide/RightThird';
import NewsTabs from './RightSide/NewsTabs';
import National from './RightSide/National';
import BreakingNewsSlider from '../BreakingNews/BreakingNewsSlider';

const Home = () => {
  const [allPosts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Check if data exists in local storage
        const cachedData = localStorage.getItem('allPosts');
        if (cachedData) {
          setPosts(JSON.parse(cachedData));
          setIsLoading(false);
        } else {
          const response = await axios.get('https://admin.desh365.top/api/all-post');
          setPosts(response.data.data);
          setIsLoading(false);
          // Cache the data in local storage
          localStorage.setItem('allPosts', JSON.stringify(response.data.data));
        }
      } catch (error) {
        console.error('Error fetching the posts:', error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Helmet>
        <title>News Portal Home Page</title>
      </Helmet>

      <div className='grid md:grid-cols-12 md:mx-10 ml-4 gap-6 lg:grid-cols-12 grid-cols-1'>
        <div className='col-span-2 order-last md:order-first lg:block lg:order-first gap-3 '>
          <LeftSide />
        </div>

        <div className='md:col-span-10'>
          <div className='grid md:grid-cols-8 lg:grid-cols-8 grid-cols-1 gap-5 '>
            <div className='md:col-span-5  col-span-1'>
              <BreakingNewsSlider />
            </div>
            <div className='md:col-span-3 my-7 md:my-0 col-span-1 px-2 h-[404px] w-[100%] shadow-lg'>
              <RightThird allPosts={allPosts} />
            </div>
          </div>

          <Add />
          <div className='grid  md:grid-cols-8 grid-cols-1 md:gap-4 gap-8 py-6'>
            <National />
            <div className='md:col-span-3 grid-cols-1'>
              <NewsTabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

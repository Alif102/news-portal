import React from 'react';
import Leftside from './Leftside/Leftside';
import Add from '../Home/RightSide/Add';
import SorbocchoPothito from '../../Component/SorbocchoPothito';
import ThirdSideNewsOne from './ThirdSide/ThirdSideNewsOne';
import NewsTabs from '../Home/RightSide/NewsTabs';
import v1 from '../../assets/Images/v1.jpg';
import NewsCard from '../../Component/NewsCard';

import PostBody from '../../Component/PostBody';
import NewsTypeOne from '../../Component/CustomComponent/NewsTypeOne';

const SecondHomePage = ({ related , postData }) => {


  



  // if (!postData) {
  //   return <div>Loading...</div>; // Or any fallback content
  // }

  const imageUrl = `http://admin.desh365.top/public/storage/post-image/${postData?.image}`;


  return (
    <div className='container mx-auto'>
      <div className='grid md:grid-cols-12 md:mx-12 mx-2 gap-6 lg:grid-cols-12 grid-cols-1'>
        <div className='col-span-2 hidden md:block order-last md:order-first'>
          <Leftside />
          <Leftside />
        </div>

        <div className='col-span-10'>
          <Add />

          <div className='grid md:grid-cols-8 grid-cols-1 gap-6'>
            <div className='md:col-span-5 col-span-1'>
              
              <h1 className="box-text1 md:block sm:text-center md:text-start my-2 text-sm md:text-xl lg:text-2xl mt-3">
                {postData?.title}
              </h1>
              <img className='w-[400px] h-[350px]' src={imageUrl} alt="" />

              <div className="flex items-center justify-center my-3 w-auto h-auto font-bold bg-[#D9D9D9]">ADD</div>

              {/* <PostBody postBody={postData.post_body} /> */}


              {/* <PostBody htmlContent={data.post_body} /> */}

              <div className="flex items-center justify-center my-3 mx-auto w-[50%] h-[250px] font-bold bg-[#D9D9D9]">ADD</div>

              <Add />
            </div>
            <div className='md:col-span-3 col-span-1'>
             <NewsTypeOne/>
              <div className='w-[100%] ml-1'>
                <NewsTabs />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-12 md:mx-10 mx-2 mt-3 gap-6 lg:grid-cols-12 grid-cols-1'>
        <div className='col-span-12'>
          <NewsCard related={related} />
        </div>
      </div>
    </div>
  );
}

export default SecondHomePage;

/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Leftside from './Leftside/Leftside';
import Add from '../Home/RightSide/Add';
import NewsTabs from '../Home/RightSide/NewsTabs';
import NewsCard from '../../Component/NewsCard';
import PostBody from '../../Component/PostBody';
import { Helmet } from 'react-helmet-async';
import ScrollToTopOnPageChange from '../../Component/Shared/ScrollToTopOnPageChange';

const SecondHomePage = ({ related, postData }) => {
  
  const imageUrl = `https://admin.desh365.top/public/storage/post-image/${postData.image}`;
 
  

  const shareOnFacebook = () => {
    const cururl = `https://news-portal-gray.vercel.app/details/${postData.id}`;
    // const cururl = `https://www.bd24live.com/deadly-strikes-on-kharkiv-as-biden-lets-ukraine-use-us-arms-inside-russia/`;
  
    window.FB.ui({
      method: 'share',
      href: cururl,
      quote: 'Your custom quote here', // Add your custom title here
      picture: imageUrl, // Use dynamic imageUrl here
    }, function(response) {
      // Optional callback function
    });
  };
  
  
  return (
    <div>
      <Helmet>
        <title>{postData.title}</title>
      </Helmet>
      <ScrollToTopOnPageChange />

      <div className="container mx-auto">
        <div className="grid md:grid-cols-12 md:mx-12 mx-2 gap-6 lg:grid-cols-12 grid-cols-1">
          <div className="col-span-2 hidden md:block order-last md:order-first">
            <Leftside />
            <Leftside />
          </div>

          <div className="col-span-10">
            <div className='hidden md:block'>
              <Add />
            </div>

            <div className="grid md:grid-cols-8 grid-cols-1 gap-6">
              <div className="md:col-span-5  col-span-1">
                <button className='bg-gray-200 my-4 p-4' onClick={shareOnFacebook}>Share on Facebook</button>
                <div className="py-5">
                  <br />
                  <hr />
                </div>
                <h1 className="box-text1 ">
                  {postData.title}
                </h1>
                <img className="banner-img" src={imageUrl} alt={postData.title} />
              
              {/* Add */}
                {/* <div className="flex items-center justify-center my-3 w-auto h-auto font-bold bg-[#D9D9D9]">ADD</div> */}
                {/* <div data-type="_mgwidget" data-widget-id="1624970">
                </div>

                <script>{(function (w, q) {
                  w[q] = w[q] || [];
                  w[q].push(["_mgc.load"]);
                })(window, "_mgq")}
                </script> */}
                
                <PostBody postBody={postData.post_body} />
                <div className="flex items-center justify-center my-3 mx-auto w-[50%] h-[250px] font-bold bg-[#D9D9D9]">ADD</div>
              </div>
              <div className="md:col-span-3 col-span-1">
                <div className='hidden md:block'>
                  <Add />
                </div>
                <div className="w-[100%] mt-6 border border-gray ml-1">
                  <NewsTabs />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 md:mx-10 mx-2 mt-3 gap-6 lg:grid-cols-12 grid-cols-1">
          <div className="col-span-12">
            <NewsCard related={related} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHomePage;

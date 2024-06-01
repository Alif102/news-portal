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
  useEffect(() => {
    // Dynamically set og:title and og:image meta tags
    const setOgMetaTags = () => {
      const ogTitleTag = document.createElement('meta');
      ogTitleTag.setAttribute('property', 'og:title');
      ogTitleTag.setAttribute('content', postData.title);
      document.head.appendChild(ogTitleTag);

      const ogImageTag = document.createElement('meta');
      ogImageTag.setAttribute('property', 'og:image');
      ogImageTag.setAttribute('content', `https://news-portal-gray.vercel.app/public/storage/post-image/${postData.image}`);
      document.head.appendChild(ogImageTag);
    };

    setOgMetaTags();
  }, [postData]);

  const cururl = `https://news-portal-gray.vercel.app/details/${postData.id}`;

  const shareOnFacebook = () => {
    // Assuming cururl is defined elsewhere
    const cururl = `https://news-portal-gray.vercel.app/details/${postData.id}`;
  
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
                <button onClick={shareOnFacebook}>Share on Facebook</button>
                <div className="py-5">
                  <br />
                  <hr />
                </div>
                <h1 className="box-text1 ">
                  {postData.title}
                </h1>
                <img className="banner-img" src={imageUrl} alt={postData.title} />
                <div className="flex items-center justify-center my-3 w-auto h-auto font-bold bg-[#D9D9D9]">ADD</div>
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

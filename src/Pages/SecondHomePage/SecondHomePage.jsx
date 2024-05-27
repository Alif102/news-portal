import React from 'react';
import Leftside from './Leftside/Leftside';
import Add from '../Home/RightSide/Add';
import NewsTabs from '../Home/RightSide/NewsTabs';
import NewsCard from '../../Component/NewsCard';
import PostBody from '../../Component/PostBody';
// import { RiFacebookBoxFill } from "react-icons/ri"; 
import Loader from '../../Component/Loader/Loader';
import { FacebookShareButton, FacebookIcon } from "react-share"
const SecondHomePage = ({ related, postData }) => {
  // const handleClick = () => {
  //   // Redirect to the post's URL
  //   window.location.href = url;
  // };
  if (!postData) {
    return <div className='text-center'>
      <Loader />
    </div> // Or any fallback content
  }

  const shareOnFacebook = () => {
    // Initialize Facebook SDK (make sure you have included the SDK script)
    window.FB.ui({
      method: 'share',
      href: `http://localhost:5173/details//${postData.id}`, // Replace with your actual website URL
    }, function (response) { });
  }

  const imageUrl = `https://admin.desh365.top/public/storage/post-image/${postData.image}`;



  ;

  const url = "https://news-portal-gray.vercel.app/স্পোর্টস";
  const logoFillColor = "white";


  console.log("URL:", url);
  console.log("logoFillColor:", logoFillColor);

  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-12 md:mx-12 mx-2 gap-6 lg:grid-cols-12 grid-cols-1">
        <div className="col-span-2 hidden md:block order-last md:order-first">
          <Leftside />
          <Leftside />
        </div>

        <div className="col-span-10">
          <Add />

          <div className="grid md:grid-cols-8 grid-cols-1 gap-6">
            <div className="md:col-span-5 col-span-1">
              {/* <a href={shareOnFacebook} target="_blank" rel="noopener noreferrer">
            Share on Facebook
        </a> */}


              <div className='flex gap-5'>
                <FacebookShareButton url={url}>
                  <FacebookIcon logoFillColor={logoFillColor} title={'sharing happiness'} />
                </FacebookShareButton>
                {/* <FacebookShareButton url={`https://www.bd24live.com/bangla/731486`} >  fb share</FacebookShareButton> */}
                {/* <ShareButton postId={`/details/${postData.id}`}/> */}
                {/* <ShareButton postId={`/bangla/731486`} /> */}
              </div>



              <div class="py-5">
                {/* <ShareSocial  
  url ="url_to_share.com"
  socialTypes= {['facebook','twitter']}
  onSocialButtonClicked={ data => console.log(data)}    
/> */}
                {/* <ShareIcons style={{ cursor: 'pointer' }} url={postUrl} title={postTitle} /> */}
                <br />
                <hr />
              </div>
              <h1 className="box-text1 md:block sm:text-center md:text-start my-2 text-sm md:text-xl lg:text-2xl mt-3">
                {postData.title}
              </h1>
              <img className="w-[400px] h-[350px]" src={imageUrl} alt={postData.title} />

              <div className="flex items-center justify-center my-3 w-auto h-auto font-bold bg-[#D9D9D9]">ADD</div>

              <PostBody postBody={postData.post_body} />

              <div className="flex items-center justify-center my-3 mx-auto w-[50%] h-[250px] font-bold bg-[#D9D9D9]">ADD</div>


            </div>
            <div className="md:col-span-3 col-span-1">
              <Add />
              <div className="w-[100%] ml-1">
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
  );
};

export default SecondHomePage;

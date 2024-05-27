import React, { useEffect } from 'react';

const ShareButton = ({ postId }) => {


    useEffect(() => {
        // Initialize Facebook SDK
        if (window.FB) {
          window.FB.init({
            appId: 'your-app-id',
            version: 'v13.0',
          });
        }
      }, []);

      const shareOnFacebook = () => {
        if (window.FB) {
          window.FB.ui({
            method: 'share',
            // href: `https://www.bd24live.com${postId}`,
             href: `https://news-portal-gray.vercel.app/details/${postId}`,
            //  href: `http://localhost:5173/${postId}`,
              
          }, function(response){});
        }
      }

      // http://localhost:5173/details/2
 

  return (
    <button onClick={shareOnFacebook}>Share on Facebook</button>
  );
}

export default ShareButton;

import React from 'react';
import DOMPurify from 'dompurify';

const PostBody = ({ postBody }) => {
  
  const sanitizedHTML = DOMPurify.sanitize(postBody);

  return (
    <div className='m-0 p-2 '
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};

export default PostBody;

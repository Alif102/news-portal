import React from 'react';
import DOMPurify from 'dompurify';

const PostBody = ({ postBody }) => {
  
  const sanitizedHTML = DOMPurify.sanitize(postBody);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};

export default PostBody;

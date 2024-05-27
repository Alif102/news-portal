import React, { useState } from 'react';
import DOMPurify from 'dompurify';

const RemoveTag = ({ postBody }) => {
  // Function to extract the first 50 words from the post body
  const extractFirst50Words = (content) => {
    return content.split(' ').slice(0, 50).join(' ');
  };

  // Extract the first 50 words from the post body
  const truncatedContent = extractFirst50Words(postBody);

  // Sanitize the truncated content using DOMPurify
  const sanitizedContent = DOMPurify.sanitize(truncatedContent);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </div>
  );
};

export default RemoveTag;


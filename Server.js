// SSR code (e.g., using Express.js)
const express = require('express');
const { renderToString } = require('react-dom/server');
const React = require('react');
const App = require('./App');

const app = express();

app.get('/post/:id', (req, res) => {
  // Fetch post data based on ID
  const postData = fetchPostData(req.params.id);
  
  // Generate Open Graph meta tags dynamically
  const ogMetaTags = `
    <meta property="og:title" content="${postData.title}" />
    <meta property="og:description" content="${postData.description}" />
    <meta property="og:image" content="${postData.imageUrl}" />
    <meta property="og:url" content="${req.protocol}://${req.get('host')}${req.originalUrl}" />
    <meta property="og:type" content="article" />
  `;

  // Render React component to string
  const appHtml = renderToString(<App post={postData} />);
  
  // Combine HTML with meta tags
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      ${ogMetaTags}
      <title>${postData.title}</title>
    </head>
    <body>
      <div id="root">${appHtml}</div>
    </body>
    </html>
  `;

  // Send HTML response
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

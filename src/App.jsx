import React from 'react';
import { createRoot } from 'react-dom';
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import RouterProviderWrapper from './yourRouterFile'; // Import your custom router configuration file

const App = () => {
  return (
    <HelmetProvider>
      <React.StrictMode>
        <RouterProvider router={RouterProviderWrapper}>
          <div className={classes.root}>
            {/* Your other components can go here */}
          </div>
        </RouterProvider>
      </React.StrictMode>
    </HelmetProvider>
  );
};

createRoot(document.getElementById('root')).render(<App />);

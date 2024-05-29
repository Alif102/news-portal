
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';

function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0); // Scrolls to the top of the page

    // Simulate loading time (remove this setTimeout in production)
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <div>
      {loading && (
        <div className="loader">
          {/* Your loader component */}
         <Loader/>
        </div>
      )}
    </div>
  );
}

export default ScrollToTopOnPageChange;

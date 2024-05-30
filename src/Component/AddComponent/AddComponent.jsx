import React, { useEffect } from 'react'

const AddComponent = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://jsc.mgid.com/site/556728.js';
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
    <div>
       <div data-type="_mgwidget" data-widget-id="1624970"></div>
    </div>
  )
}

export default AddComponent

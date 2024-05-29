import React, { useState, useEffect } from 'react';
import logo from '../../assets/Images/news_logo.png'
import { Link } from 'react-router-dom';
const Naavbar = () => {


  const [categories, setCategories] = useState([]);

  useEffect(() => {
      // Replace 'your-api-endpoint' with your actual API endpoint
      fetch('https://admin.desh365.top/api/all-category')
          .then(response => response.json())
          .then(data => {
              const extractedCategories = data.data.map(category => ({
                  id: category.id,
                  name: category.name
              }));
              setCategories(extractedCategories);
          })
          .catch(error => console.error('Error fetching data:', error));
  }, []);





  const [isNavbarHidden, setIsNavbarHidden] = useState(true);
  const [activeRoute, setActiveRoute] = useState('home'); // Default active route

  const toggleNav = () => {
    setIsNavbarHidden(!isNavbarHidden);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1050) {
        setIsNavbarHidden(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSetActiveRoute = (route) => {
    setActiveRoute(route);
  };

  return (
    <div>
       
      <div className="  w-[92%] mx-auto ">
        <nav className=" flex text-gray-800 items-center justify-between flex-wrap pb-2 px-5">
          <div>
            {/* <span className="font-semibold text-1xl text-gray-900">Mews </span> */}
           <Link to='/'> <img className='h-[80px] w-[70%] py-1 rounded-md' src={logo} alt="logo" /></Link>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleNav}
              className="flex flex-col px-3 py-4 mt-2 border rounded border-gray-800 hover:text-white hover:border-white"
            >
              <div className="w-6 h-1 bg-black"></div>
              <div className="w-6 h-1 bg-black my-1"></div>
              <div className="w-6 h-1 bg-black"></div>
            </button>
          </div>
          <div
            className={`w-full lg:w-auto block lg:flex lg:items-center lg:inline-block ${
              isNavbarHidden ? 'hidden' : ''
            }`}
            id="navbar"
          >
            <div className="lg:flex-grow justify-center  text-xl text-center space-x-3">
            <ul className="flex  md:flex-row flex-col md:items-center md:gap-5 gap-3">
                {categories.map(category => (
                    
                    <li  key={category.id}><Link to={category.name} className="hover:text-purple-500" href="/sports" >{category.name}</Link></li>
                ))}
            </ul>
              
             
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Naavbar;

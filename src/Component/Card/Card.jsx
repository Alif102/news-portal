import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category, data }) => (
  <div className='col-span-4'>
    <h1 className='font-bold text-xl'>{category}</h1>
    <div className='border-black py-3 border-b-4'></div>
    <div className='space-y-3 text-[14px] px-2 my-4'>
      {data.length > 0 ? (
        <div className='space-y-4'>
          <Link to={`/details/${data[0].id}`} className='block'>
            <img className='w-[100%] h-[200px] mb-3' src={`https://admin.desh365.top/public/storage/post-image/${data[0].image}`} alt={data[0].title} />
            <h1 className='text-xl font-bold'>{data[0].title}</h1>
            <h1 className='text-sm'>{data[0].post_body}</h1>
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </div>
);

const Card = () => {
  const [rajnity, setRajnity] = useState([]);
  const [krishi, setKrishi] = useState([]);
  const [sastho, setSastho] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://admin.desh365.top/api/all-post');

        setRajnity(response.data.data.filter(post => post.category_name === "রাজনীতি"));
        setKrishi(response.data.data.filter(post => post.category_name === "কৃষি ও অর্থ"));
        setSastho(response.data.data.filter(post => post.category_name === "স্বাস্থ্য ও চিকিৎসা"));
        setLoading(false);
      } catch (error) {
        // console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='border-[#D8D8D8] w-[100%] mx-auto my-6 border-b-4'></div>
      <div className='grid md:grid-cols-12 md:mx-10 mx-2 gap-6 lg:grid-cols-12 grid-cols-1'>
        {loading ? (
          <Loader/>
        ) : (
          <>
            <CategoryCard category="রাজনীতি" data={rajnity} />
            <CategoryCard category="কৃষি, অর্থ ও বাণিজ্য" data={krishi} />
            <CategoryCard category="স্বাস্থ্য ও চিকিৎসা" data={sastho} />
          </>
        )}
      </div>
      <div className='border-black w-[94%] mx-auto my-6 border-b-2'></div>
    </div>
  );
};

export default Card;

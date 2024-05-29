import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostBody from '../PostBody';

const Card = () => {



  const [rajnity, setRajnity] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://admin.desh365.top/api/all-post');
        console.log('Response data:', response.data.data);

        const filteredrajnity = response.data.data.filter(post => post.category_name === "রাজনীতি");
        setRajnity(filteredrajnity);
        // setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [krishi, setKrishi] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://admin.desh365.top/api/all-post');
        console.log('Response data:', response.data.data);

        const filteredKrishi = response.data.data.filter(post => post.category_name === "কৃষি ও অর্থ");
        setKrishi(filteredKrishi);
        // setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const [sastho, setSastho] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://admin.desh365.top/api/all-post');
        console.log('Response data:', response.data.data);

        const filteredsastho = response.data.data.filter(post => post.category_name === "স্বাস্থ্য ও চিকিৎসা");
        setSastho(filteredsastho);
        // setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(krishi)


  return (
<div>
<div className=' border-[#D8D8D8] w-[94%] mx-auto my-6 border-b-4'></div>
    <div className='grid md:grid-cols-12 md:mx-10 mx-2 gap-6 lg:grid-cols-12 grid-cols-1'>
     
        <div className='col-span-4'>
      <h1 className='font-bold text-xl'>রাজনীতি</h1>
              <div className=' border-black py-3 border-b-4'></div>

              <div className='space-y-3 text-[14px] px-2 my-4'>
{rajnity.length > 0 && (
            <div className='space-y-4'>
              <img className='w-[100%] h-[200px] mb-3' src={`https://admin.desh365.top/public/storage/post-image/${rajnity[0].image}`} alt={rajnity[0].title} />
              <h1 className='text-xl font-bold'>
                {rajnity[0].title}
              </h1>
              <h1 className='text-sm '>
                <PostBody postBody={rajnity[0].post_body}/>
              </h1>
            </div>
          )}
</div>
              
    </div>

    <div className='col-span-4'>
      <h1 className='font-bold text-xl'>কৃষি, অর্থ ও বাণিজ্য</h1>
              <div className=' border-black py-3 border-b-4'></div>

            

<div className='space-y-3 text-[14px] px-2 my-4'>
{krishi.length > 0 && (
            <div className='space-y-4'>
              <img className='w-[100%] h-[200px] mb-3' src={`https://admin.desh365.top/public/storage/post-image/${krishi[0].image}`} alt={krishi[0].title} />
              <h1 className='text-xl font-bold'>
                {krishi[0].title}
              </h1>
              <h1 className='text-sm '>
                {krishi[0].post_body}
              </h1>
            </div>
          )}
</div>
    </div>

    <div className='col-span-4'>
      <h1 className='font-bold text-xl'>স্বাস্থ্য ও চিকিৎসা</h1>
              <div className=' border-black py-3 border-b-4'></div>

              <div className='space-y-3 text-[14px] px-2 my-4'>
{sastho.length > 0 && (
            <div className='space-y-4'>
              <img className='w-[100%] h-[200px] mb-3' src={`https://admin.desh365.top/public/storage/post-image/${sastho[0].image}`} alt={sastho[0].title} />
              <h1 className='text-xl font-bold'>
                {sastho[0].title}
              </h1>
              <h1 className='text-sm '>
                {sastho[0].post_body}
              </h1>
            </div>
          )}
</div>
    </div>
    </div>
    <div className=' border-black w-[94%] mx-auto my-6 border-b-2'></div>
    </div>
  )
}

export default Card

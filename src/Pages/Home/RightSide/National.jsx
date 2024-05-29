import React, { useEffect, useState } from 'react'
import Jatiyo from '../../../Component/Jatiyo/Jatiyo'
const National = () => {


  const [posts, setPosts] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://admin.desh365.top/api/all-post');
            console.log('Response data:', response.data.data); 
           
            const filteredPosts = response.data.data.filter(post => post.category_name === "জাতীয়");
            setPosts(filteredPosts);
            // setPosts(response.data.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
console.log(posts)
    console.log(posts[0])



  return (
    <div className='md:col-span-5 grid-cols-1 gap-3'>
              <h1 className='font-bold text-3xl'>জাতীয়</h1>
              <div className=' border-black py-3 border-b-4'></div>

              <Jatiyo/>
             


            </div>
  )
}

export default National

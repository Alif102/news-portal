import React, { useEffect, useState } from 'react'
// import NewsDiv2 from '../../Pages/Home/RightSide/NewsDiv2'
import axios from 'axios';
import { Link } from 'react-router-dom';
import PostBody from '../PostBody';
// import PostBody from '../../Component/PostBody';

const Jatiyo = () => {

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
    //  const slicedPostBody = posts[0].post_body.slice(0, 50);
   
    return (
        <div>
           

            <div  className='flex flex-1 md:flex-row flex-col gap-3 mt-4'>


                <div className=''>
                    {/* <div className='w-[95%] h-[200px] mb-3 bg-[#D9D9D9]'></div> */}
                    {posts.length > 0 && (
            <div className='space-y-4'>
              <img className='w-[95%] h-full mb-3' src={`https://admin.desh365.top/public/storage/post-image/${posts[0].image}`} alt={posts[0].title} />
              <h1 className='text-xl font-bold'>
                {posts[0].title}
              </h1>
{/*             
                <div >
                <PostBody className='text-[10px]' postBody={posts[0].post_body} />
                </div> */}
              
            </div>
          )}
                  
                  
                </div>


                <div className=''>
                <div>
    
                <div className=' flex flex-col space-y-4 gap-3 py-4'>
{posts.map(post => {
        const imageUrl = `https://admin.desh365.top/public/storage/post-image/${post.image}`;
        
        return (
         <Link to={`/details/${post?.id}`}>
          <div className='flex  gap-2' key={post?.id}>
                        <img className='w-24 h-24' src={imageUrl} alt={post.title} />

            <h2>{post.title}</h2>
          </div>
          </Link>
        );
      })}
    </div>
    </div>
                </div>

                {/* <div className='col-span-4'>
                    <div className="flex items-center justify-center w-[90%] h-[350px]  font-bold bg-[#D9D9D9]">ADD</div>
                </div> */}









            </div>
            {/* <div className=' border-black w-[94%] mx-auto my-6 border-b-2'></div> */}

        </div>
    )
}

export default Jatiyo

import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const NewsTypeOne = () => {

   // Fetch Data
   const [posts, setPosts] = useState([]);
   // console.log(posts)
   
   const reloadPageWithDelay = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000); 
  };
 
 
   useEffect(() => {
     const fetchPosts = async () => {
       try {
         const response = await axios.get('http://desh365.top/api/all-post');
         setPosts(response.data.data);
       } catch (error) {
         console.error('Error fetching the posts:', error);
       }
     };
 
     fetchPosts();
   }, []);

   
 
    return (
      <div>
          <div>
            
                <div className='w-[100%] h-auto pb-5 mb-5 space-y-4  mt-7 shadow-md  flex flex-col '>
                {/* <div className="bg-[#BDBDBD] h-[50px] w-[100%] 
                top-0 absolute mb-5 flex justify-center items-center text-center">{title}</div> */}
               
               <h1 className="border border-b p-2"> সর্বশেষ খবর</h1>
                 <div className="px-3" key={posts.id}>


                


                  {posts.map(post => {
        const imageUrl = `https://admin.desh365.top/public/storage/post-image/${post.image}`;
        
        return (
       
         <div className='overflow-auto h-300px'>
           <Link to={`/details/${post?.id}`} onClick={reloadPageWithDelay}>
           <div className='flex gap-2  my-3' key={post?.id}>
             <div className='news-box3 w-28 h-24 relative overflow-hidden  bg-no-repeat'>
                        <img className='transition duration-300 ease-in-out hover:scale-110' src={imageUrl} alt={post.title} />
</div>
            <h2 className='text-[10px] font-bold justify-center items-center'>{post.title}</h2>
           
          </div></Link>
          <hr/>
         </div>
         
         
        );
      })}



                  
                 
                   
                  </div>
                
                 
  
                </div>
              </div>
      </div>
    )
  }
  
  export default NewsTypeOne
/* eslint-disable react/prop-types */
import axios from 'axios';
import SecondHomePage from '../SecondHomePage/SecondHomePage'
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
// import ExploreMore from "./ExploreMore";

const DetailPage = () => {
    

    const [data, setData] = useState({});
    // const [detail, setDetail] = useState({});

    const {id} = useParams();
    

    const details = useLoaderData();
    
    const detail = details.data
    console.log(detail)


     useEffect(() => {
        const value = parseInt(id)
        const findId = detail.find(post => post.id === value  );
        
        setData(findId)
    }, [])
    console.log(data.id)

    const postId = data.id


    console.log(postId);

    const [postData, setPostData] = useState(null);
    const [related, setRelated] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://admin.desh365.top/api/post/${id}`);
          
          
          setPostData(response.data.data);
         
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [id]);



    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://admin.desh365.top/api/post/${id}`);
          
          
          setRelated(response.data.related_post);
         
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [id]);


    console.log(postData);
    console.log(related);
    
    

    

  return (
    <div>
      {/* <h1>{postData.length}</h1> */}
      
       
       {/* <SecondHome detail ={detail}></SecodHom> */}
       <SecondHomePage related={related} postData={postData} data ={data}></SecondHomePage>
       

    </div>
  )
}

export default DetailPage
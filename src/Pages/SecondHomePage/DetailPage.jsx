/* eslint-disable react/prop-types */
import axios from 'axios';
import SecondHomePage from '../SecondHomePage/SecondHomePage'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
// import ExploreMore from "./ExploreMore";

const DetailPage = () => {
    

    const {id} = useParams();
    
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

  


    

    

  return (
    <div>
      {/* <h1>{postData.length}</h1> */}
      
       
       {/* <SecondHome detail ={detail}></SecodHom> */}
       <SecondHomePage related={related} postData={postData} ></SecondHomePage>
       

    </div>
  )
}

export default DetailPage
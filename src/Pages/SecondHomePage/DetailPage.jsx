import axios from 'axios';
import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import Loader from '../../Component/Loader/Loader';
import SecondHomePage from '../SecondHomePage/SecondHomePage'; // Importing directly as lazy loading might add unnecessary overhead

const DetailPage = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [related, setRelated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = sessionStorage.getItem(`post_${id}`);
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          setPostData(parsedData.postData);
          setRelated(parsedData.related);
          setLoading(false);
        } else {
          const response = await axios.get(`https://admin.desh365.top/api/post/${id}`);

        
          setPostData(response.data.data);
          
          setRelated(response.data.related_post);
          setLoading(false);
          sessionStorage.setItem(`post_${id}`, JSON.stringify({ postData: response.data.data, related: response.data.related_post }));
         
       
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const transformedPostData = useMemo(() => ({ postData, related }), [postData, related]);

 


  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {transformedPostData && (
            <SecondHomePage related={related} postData={postData} />
          )}
        </div>
      )}
    </div>
  );
};

export default DetailPage;

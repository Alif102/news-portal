import axios from 'axios';
import { useEffect, useMemo, useState, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import Loader from '../../Component/Loader/Loader';

const SecondHomePage = lazy(() => import('../SecondHomePage/SecondHomePage'));

const DetailPage = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [related, setRelated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://admin.desh365.top/api/post/${id}`);
        setPostData(response.data.data);
        setRelated(response.data.related_post);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const transformedPostData = useMemo(() => {
    return { postData, related };
  }, [postData, related]);

  return (
    <div>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div>
            {transformedPostData && (
              <Suspense fallback={<Loader />}>
                <SecondHomePage related={related} postData={postData} />
              </Suspense>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;

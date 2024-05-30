import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import NavbarPage from './NavbarPage';

const CommonPage = () => {

    const {id} = useParams();
    const [categories, setCategories] = useState([]);
  
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://admin.desh365.top/api/category-post/${id}`);
          
          console.log(response.data.data)
          setCategories(response.data.data);
         
         
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [id]);

    console.log(categories)
  return (
    <div>
      <NavbarPage categories={categories} />
    </div>
  )
}

export default CommonPage
